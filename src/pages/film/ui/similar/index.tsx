import styles from './styles.module.scss';
import { Carousel } from "@/shared";
import { SimilarMovie, MovieEntity } from "@/shared/api";

interface ISimilarInterface {
    data: SimilarMovie[];
}

export const Similar = ({data}: ISimilarInterface) => {
    return (
        <>
            <h3 className={styles.head}>
                Похожее
            </h3>
            <Carousel withButtons data={data as MovieEntity[]}/>
        </>
    )
}