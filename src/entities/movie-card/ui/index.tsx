import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { RefObject } from "react";

interface IMovieCardPropsInterface {
    cardRef?: RefObject<HTMLDivElement>;
    imgUrl: string;
    name: string;
    year: number;
    length: number | undefined;
    rating: number;
    id: number;
}

export const MovieCard = (Props: IMovieCardPropsInterface) => {

    const {
        cardRef, imgUrl, name,
        year, length, rating, id
    } = Props;

    let time;

    if (length) time = Math.floor(length / 60)
        ? `${Math.floor(length/ 60)} ч ${length % 60} мин`
       : `${length} мин`

    return (
        <Link className={styles.container} to={`films/${id}`}>
            <div className={styles.imageWrapper}>
                <img width='100%' height='100%' src={imgUrl}/>
            </div>
            <div className={styles.information}>
                <span className={styles.rating}>
                    {rating.toFixed(1)}
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