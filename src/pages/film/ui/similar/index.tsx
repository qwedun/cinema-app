import { SimilarMovie, MovieEntity, Carousel } from "@/shared";
import { MovieCard } from "@/entities";
import styles from './styles.module.scss';

interface ISimilarInterface {
    data: SimilarMovie[];
}

export const Similar = ({data}: ISimilarInterface) => {
    return (
        <>
            <h3 className={styles.head}>
                Похожее
            </h3>
            <Carousel withButtons >
                {
                    data.map(movie => (
                        <MovieCard movie={movie as MovieEntity} fillContainer={false}/>
                    ))
                }
            </Carousel>
        </>
    )
}