import { Link } from "react-router-dom";
import { MovieEntity } from "@/shared/api";
import styles from './styles.module.scss';

interface IMovieListProps {
    data: MovieEntity[];
}

export const MovieList = ({data} : IMovieListProps) => {
    return (
        <div className={styles.list}>
            {
                data.map(movie => (
                    <Link to={`films/${movie.id}`} className={styles.card} key={movie.id}>
                        <div className={styles.imgWrapper}>
                            <img className={styles.img} src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${movie.id}.jpg`}/>
                        </div>
                        <div className={styles.info}>
                            <h3>{movie.name}</h3>
                            <div>
                                <span>{movie.year}</span>
                                <span className={styles.rating}>{movie.rating.kp.toFixed(2)}</span>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}