import styles from './styles.module.scss'
import {MovieEntity} from "@/shared/api";

interface IBigMovieCard {
    data: MovieEntity;
}

export const    BigMovieCard = ({data} : IBigMovieCard) => {

    const imgUrl = data.backdrop.url;
    const { name, year } = data;
    const rating = data.rating.kp;
    const genre = data.genres[0].name;

    return (
        <div className={styles.wrapper}>
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
        </div>
    )
}