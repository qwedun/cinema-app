import styles from './styles.module.scss';

import { MovieEntity } from "@/shared/api";
import { MovieCard } from "@/entities";

interface IMoviesProps {
    data: MovieEntity[];
}


export const MovieList = ({data} : IMoviesProps) => {
    return (
        <>
            <h2>Фильмография</h2>
            <div className={styles.movies}>
                {data.length && (
                    data.map(film => (
                        <MovieCard movie={film} fillContainer/>
                    ))
                )}
            </div>
        </>
    )
}