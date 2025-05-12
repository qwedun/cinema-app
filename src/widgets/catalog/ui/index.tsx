import { Select } from "@/widgets/catalog/ui/select";
import { useState } from "react";
import { MovieCard } from "@/entities";
import { getArrays, useParams, useApi } from "@/widgets/catalog/lib";
import { Pagination, Spinner } from "@/shared";
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

    const {
        genre, setGenre,
        rating, setRating,
        sort, setSort,
        years, setYears,
        searchParams
    } = useParams()

    const { data,
        error,
        isPending
    } = useApi(type, searchParams);

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
            {
                isPending ? (
                    <Spinner filled/>
                    ) : (
                        <>
                            <div className={styles.movies}>
                                {
                                    data.docs.map(movie => (
                                        <MovieCard key={movie.id} movie={movie} fillContainer/>
                                    ))
                                }
                            </div>
                            {
                                data.pages > 1 ? (
                                    <Pagination totalPages={data.pages}/>
                                ) : null
                            }
                        </>
                )
            }
        </div>
    )
}