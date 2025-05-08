import styles from './styles.module.scss';

interface ILoadMoreProps {
    onClick: () => void;
}

export const LoadMore = ({onClick} : ILoadMoreProps) => {

    return (
        <button className={styles.button} onClick={onClick}>
            Больше фильмов
        </button>
    )
}