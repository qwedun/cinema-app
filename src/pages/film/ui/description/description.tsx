import { useState } from "react";
import { useImages } from "@/pages/film/api";
import { Button } from "@/shared";
import styles from './styles.module.scss';

interface IDescription {
    data: string;
    id: number;
}
export const Description = ({data, id}: IDescription) => {

    const [category, setCategory] = useState('description');
    const isDescription = category === 'description';

    const {
        images,
        hasNextPage,
        fetchNextPage
    } = useImages(id)

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
            {
                isDescription ? (
                    <p className={styles.text}>
                        {data}
                    </p>
                ) : (
                    <>
                        <div className={styles.grid}>
                            {
                                images ? (
                                    images.map(img => (
                                        <div className={styles.imgWrapper}>
                                            <img className={styles.img}
                                                 alt='Кадр из фильма'
                                                 loading='lazy'
                                                 src={img.url}/>
                                        </div>
                                    ))
                                ) : null
                            }
                        </div>
                        {
                            hasNextPage ? (
                                <Button onClick={() => fetchNextPage()}>
                                    Больше кадров
                                </Button>
                            ) : null
                        }
                        </>
                )
            }
        </>
    )
}