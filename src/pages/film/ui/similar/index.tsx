import styles from './styles.module.scss';
import { Carousel } from "@/shared";
import { SimilarMovie, MovieEntity } from "@/shared/api";
import { MovieCard } from "@/entities";

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
                {data.map(movie => (
                    <MovieCard movie={movie as MovieEntity} fillContainer={false}/>
                ))}
            </Carousel>
        </>
    )
}