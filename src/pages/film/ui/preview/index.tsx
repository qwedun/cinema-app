import styles from './styles.module.scss';
import { StarIcon, ShareIcon, BookmarkIcon } from '@/shared';
import { MovieEntity } from "@/shared/api";
import { Link } from "react-router-dom";

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
        shortDescription
    } = data

    const director = persons.find(el => el.enProfession === 'director');
    const actors = persons.filter(el => el.enProfession === 'actor').slice(0, 3);

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
                        <span>3 ч 10 мин</span>
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
                        <button className={`${styles.button} ${styles.first}`}>
                            Смотреть
                        </button>
                        <button className={styles.button}>
                            Трейлер
                        </button>
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