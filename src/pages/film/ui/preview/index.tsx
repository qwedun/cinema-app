import { StarIcon, ShareIcon, BookmarkIcon, MovieEntity } from '@/shared';
import { Link } from "react-router-dom";
import styles from './styles.module.scss';

interface IPreviewProps {
    data: MovieEntity;
}
export const Preview = ({data}: IPreviewProps) => {

    const {
        name,
        year,
        rating,
        backdrop,
        ageRating,
        countries,
        genres,
        persons,
        shortDescription,
        movieLength,
        videos
    } = data

    const director = persons.find(el => el.enProfession === 'director');
    const actors = persons.filter(el => el.enProfession === 'actor').slice(0, 3);

    let time = '';

    if (movieLength) time = Math.floor(movieLength / 60)
        ? `${Math.floor(movieLength/ 60)} ч ${movieLength % 60} мин`
        : `${movieLength} мин`

    return (
        <>
            <div style={{
                 backgroundImage: `url(${backdrop.url})`}}
                 className={styles.container}>
                <div className={styles.flex}>
                    <h2>{name}</h2>
                    <p className={styles.info}>
                        <span>{rating.kp.toFixed(1)}</span>
                        <span>{year}</span>
                        <span>{genres[0].name}</span>
                        <span>{ageRating}+</span>
                        <span>{countries[0].name}</span>
                        <span>{time}</span>
                    </p>
                    <p className={styles.paragraph}>
                        {shortDescription}
                    </p>
                    <p className={styles.people}>
                        <span className={styles.text}>Режиссер</span>: <Link
                        className={styles.link}
                        to={`/name/${director.id}`}>
                        {director.name}
                    </Link>
                    </p>
                    <p className={styles.people}>
                        <span className={styles.text}>Актеры</span>: {actors.map(actor => (
                            <Link className={styles.link} to={`/name/${actor.id}`}>{actor.name},</Link>
                    ))}
                    </p>
                    <div className={styles.menu}>
                        <Link to='watch' className={`${styles.button} ${styles.first}`}>
                            Смотреть
                        </Link>
                        <Link target='_blank' to={videos?.trailers[0]?.url} className={styles.button}>
                            Трейлер
                        </Link>
                        <div className={styles.imgContainer}>
                            <BookmarkIcon width={24} height={24} className={styles.img}/>
                        </div>
                        <div className={styles.imgContainer}>
                            <StarIcon width={24} height={24} className={styles.img}/>
                        </div>
                        <div className={styles.imgContainer}>
                            <ShareIcon width={24} height={24} className={styles.img}/>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}