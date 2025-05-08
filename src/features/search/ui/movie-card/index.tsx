import styles from './styles.module.scss';
import { MovieEntity } from "@/shared/api";

interface IMovieCardProps {
    movie?: MovieEntity;
}


export const MovieCard = ({movie} : IMovieCardProps) => {

    return (
        <div className={styles.card}>

        </div>
    )
}