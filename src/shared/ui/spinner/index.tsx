import styles from './styles.module.scss';

interface ISpinnerProps {
    filled?: boolean;
}

export const Spinner = ({filled} : ISpinnerProps) => {

    const className = `${styles.container} ${filled ? styles.filled : ''}`

    return (
        <div className={className}>
            <span className={styles.loader}></span>
        </div>
    )
}