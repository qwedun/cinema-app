import { Link } from 'react-router-dom';
import { Carousel, Spinner, ArrowIcon } from "@/shared";
import { MovieCard } from "@/entities";
import { MovieEntity } from "@/shared/api";
import { useMovieByGenreQuery } from "@/pages/home/api";
import styles from './styles.module.scss';

interface ICategoryProps {
    genre: 'comedy' | 'science' | 'newFilms' | 'family' | 'drama';
    data?: MovieEntity[];
}

export const Category = ({genre} : ICategoryProps) => {

    const {
        genreName,
        queryName,
        movies,
        isPending,
        error
    } = useMovieByGenreQuery(genre)

    return (
        <>
            <Link className={styles.head} to={`/films?year=2025&genre=${queryName}`}>
                {genreName}
                <ArrowIcon width={20} height={20} fill='white'/>
            </Link>
            {
                isPending ? (
                    <Spinner/>
                ) : (
                    <Carousel withButtons>
                        {
                            movies.map(movie => (
                                <MovieCard movie={movie} fillContainer={false}/>
                            ))
                        }
                    </Carousel>
                )
            }
        </>
    )
}