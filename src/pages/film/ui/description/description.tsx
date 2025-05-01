import styles from './styles.module.scss';
import { useState } from "react";

interface IDescription {
    data: string;
}
export const Description = ({data}: IDescription) => {

    const [category, setCategory] = useState('description');
    const isDescription = category === 'description';

    return (
        <>
        <div className={styles.container}>
            <span
                onClick={() => setCategory('description')}
                className={`${styles.content} ${isDescription ? styles.active : ''}`}>
                Описание
            </span>
            <span
                onClick={() => setCategory('pictures')}
                className={` ${styles.content} ${!isDescription ? styles.active : ''}`}>
                Кадры
            </span>
        </div>
            <p className={styles.text}>
                {data}
            </p>
        </>
    )
}