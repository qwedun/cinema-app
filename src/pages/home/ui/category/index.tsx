import { Link } from 'react-router-dom';
import { Carousel, GENRES, ArrowIcon } from "@/shared";
import { MovieCard } from "@/entities";
import { MovieEntity } from "@/shared/api";
import { useEffect, useState } from "react";
import { Queries } from "@/pages/home/api";
import styles from './styles.module.scss';

interface ICategoryProps {
    genre: 'comedy' | 'science' | 'newFilms' | 'family' | 'drama';
    data?: MovieEntity[];
}

export const Category = ({genre} : ICategoryProps) => {

    const genreName = GENRES[genre].name;
    const queryName = GENRES[genre].queryName;
    const [movies, setMovies] = useState<MovieEntity[]>([]);

    useEffect(() => {
        Queries.movieByGenreQuery(queryName).then(data => setMovies(data))
    }, []);

    return (
        <>
            <Link className={styles.head} to={`/films?year=2025&genre=${queryName}`}>
                {genreName}
                <ArrowIcon width={20} height={20} fill='white'/>
            </Link>
            {movies.length && <Carousel withButtons>
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} fillContainer={false}/>
                ))}
            </Carousel>}
        </>
    )
}