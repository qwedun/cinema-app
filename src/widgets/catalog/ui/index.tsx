import { Select } from "@/widgets/catalog/ui/select";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Movies } from "@/shared/api";
import { MovieCard } from "@/entities";
import { Queries } from "@/widgets/catalog/api";
import { getArrays, getParamsFromUrl, useParams } from "@/widgets/catalog/lib";
import { Pagination } from "@/shared";
import styles from './styles.module.scss';

type SelectTypes = 'rating' | 'genres' | 'years' | 'sort' | ''

interface ICatalogProps {
    type: 'movie' | 'tv-series' | 'cartoon';
    title: 'Фильмы' | 'Сериалы' | 'Мультфильмы';
}

const { sortArray,
    genresArray,
    yearsArray,
    ratingArray
} = getArrays();

export const Catalog = ({type, title}: ICatalogProps) => {

    const [activeType, setActiveType] = useState<SelectTypes>('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState<Movies>({} as Movies);

    const {
        genre, setGenre,
        rating, setRating,
        sort, setSort,
        years, setYears
    } = useParams(searchParams)

    useEffect(() => {

        const params = {
            genre: genre.queryName || '',
            sort: sort.queryName || '',
            year: years.queryName || '',
            rating:rating.queryName || '',
        }

        setSearchParams(params);

    },  [sort, rating, genre, years]);

    useEffect(() => {
        const params = getParamsFromUrl(searchParams);
        Queries.getMoviesByUrl(params, type).then(data => setMovies(data));
    }, [searchParams]);

    const setType = (currentType: SelectTypes) => {
        if (currentType === activeType) setActiveType('')
        else setActiveType(currentType)
    }

    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <div className={styles.flex}>
                <div className={styles.wrapper}>
                    <Select
                        param={genre}
                        setParams={setGenre}
                        setType={() => setType('genres')}
                        visible={activeType === 'genres'}
                        slots={genresArray}>
                        {genre.name}
                    </Select>
                    <Select
                        param={rating}
                        setParams={setRating}
                        setType={() => setType('rating')}
                        visible={activeType === 'rating'}
                        slots={ratingArray}>
                        {rating.name}
                    </Select>
                    <Select
                        param={years}
                        setParams={setYears}
                        setType={() => setType('years')}
                        visible={activeType === 'years'}
                        slots={yearsArray}>
                        {years.name}
                    </Select>
                </div>
                <Select
                    param={sort}
                    setParams={setSort}
                    setType={() => setType('sort')}
                    visible={activeType === 'sort'}
                    slots={sortArray}
                    right>
                    {sort.name}
                </Select>
            </div>
            <div className={styles.movies}>
                {movies?.docs?.length && movies.docs.map(movie => (
                    <MovieCard key={movie.id} movie={movie} fillContainer/>
                ))}
            </div>
            {
                movies.pages > 1 ? (
                    <Pagination totalPages={movies.pages}/>
                ) : null
            }
        </div>
    )
}