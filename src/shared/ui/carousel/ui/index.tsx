import styles from './styles.module.scss'
import { useEffect, useRef, useState } from "react";
import { MovieCard } from "@/entities";
import { ArrowIcon } from '@/shared'
import { Movies } from '@/shared/api'

interface ICarouselProps {
    data: Movies
}

export const Carousel = ({data}: ICarouselProps) => {

    const [index, setIndex] = useState(0);

    const [cardWidth, setCardWidth] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    const cardRef = useRef(null);
    const windowRef = useRef(null);
    const containerRef = useRef(null);

    const moveRight = () => {
        if (Math.abs(index) * cardWidth + containerWidth >= windowWidth) return;
        setIndex(prev => prev - 1)
    }

    const moveLeft = () => {
        if (index === 0) return;
        setIndex(prev => prev + 1)
    }

    useEffect(() => {
        if (!cardRef.current || !windowRef.current || !containerRef.current) return;

        const cardWidth = cardRef.current.getBoundingClientRect().width;
        const windowWidth = windowRef.current.getBoundingClientRect().width;
        const containerWidth = containerRef.current.getBoundingClientRect().width;

        setCardWidth(cardWidth + 10);
        setWindowWidth(windowWidth);
        setContainerWidth(containerWidth);
    }, [data]);

    return (
        <>
            <div ref={containerRef} className={styles.container}>
                <button
                    onClick={moveLeft}
                    className={`${styles.button} ${styles.left}`}>
                    <ArrowIcon height='24' width='24' fill='white'/>
                </button>
                <button
                    onClick={moveRight}
                    className={`${styles.button} ${styles.right}`}>
                    <ArrowIcon className={styles.rightArrow} height='24' width='24' fill='white'/>
                </button>
                <div ref={windowRef} className={styles.window}
                     style={{'transform': `translateX(${index * cardWidth}px)`,}}>
                    {data.docs.map(film => {
                        return (
                            <MovieCard
                                cardRef={cardRef}
                                name={film.name}
                                imgUrl={film.poster.previewUrl}
                                year={film.year}
                                rating={film.rating.kp}
                                length={film.movieLength}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}