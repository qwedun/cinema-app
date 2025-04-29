import styles from './styles.module.scss'
import { RefObject } from "react";

interface IMovieCardPropsInterface {
    cardRef: RefObject<null>;
    imgUrl: string;
    name: string;
    year: number;
    length: number;
    rating: number;
}

export const MovieCard = (Props: IMovieCardPropsInterface) => {

    const {
        cardRef, imgUrl, name,
        year, length, rating
    } = Props;

    const time = Math.floor(length / 60)
        ? `${Math.floor(length/ 60)} ч ${length % 60} мин`
        : `${length} мин`

    return (
        <div className={styles.container} ref={cardRef}>
            <div className={styles.imageWrapper}>
                <img width='100%' height='100%' src={imgUrl}/>
            </div>
            <div className={styles.information}>
                <span className={styles.rating}>
                    {rating.toFixed(2)}
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
        </div>
    )
}