import { Link } from "react-router-dom";
import { MovieEntity } from "@/shared/api";
import styles from './styles.module.scss'
interface IBigMovieCard {
    data: MovieEntity;
}

export const BigMovieCard = ({data} : IBigMovieCard) => {

    const imgUrl = data.backdrop.url;
    const { name, year, id } = data;
    const rating = data.rating.kp;
    const genre = data.genres[0].name;

    return (
        <Link to={`/films/${id}`} className={styles.wrapper}>
            <img className={styles.img} src={imgUrl}/>
            <div className={styles.info}>
                <div className={styles.title}>
                    {name}
                </div>
                <div className={styles.text}>
                    <span className={styles.rating}>{rating.toFixed(1)}</span>
                    <span>{year}</span>
                    <span>{genre}</span>
                </div>
            </div>
        </Link>
    )
}