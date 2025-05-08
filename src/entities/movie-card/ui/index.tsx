import styles from './styles.module.scss';
import { MovieEntity, MovieFromPerson } from "@/shared/api";
import { Link } from 'react-router-dom';

interface IMovieCardPropsInterface {
    movie: MovieEntity;
    fillContainer: boolean;
}

export const MovieCard = ({movie, fillContainer}: IMovieCardPropsInterface) => {

    const {
        poster, name,
        year, movieLength, rating, id
    } = movie;

    let time = '';

    if (movieLength) time = Math.floor(movieLength / 60)
        ? `${Math.floor(movieLength/ 60)} ч ${movieLength % 60} мин`
       : `${movieLength} мин`

    const style = fillContainer ? styles.fill : styles.normal

    return (
        <Link className={`${styles.container} ${style}`} to={`/films/${id}`}>
            <div className={styles.imageWrapper}>
                <img className={styles.img} width='100%' height='100%' src={poster?.url}/>
            </div>
            <div className={styles.information}>
                <span className={styles.rating}>
                    {rating?.kp?.toFixed(1) || ''}
                </span>
                <div>
                    <h3>
                        {name}
                    </h3>
                    <span className={styles.year}>
                        {year}
                    </span>
                    <span className={styles.time}>
                        {time}
                    </span>
                </div>
            </div>
        </Link>
    )
}