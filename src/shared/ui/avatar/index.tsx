import styles from './styles.module.scss';

interface IAvatarProps {
    src: string;
    name: string;
    profession: string;
}

export const Avatar = ({src, name, profession}: IAvatarProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgWrapper}>
                <img src={src}/>
            </div>
            <span className={styles.name}>{name}</span>
            <span className={styles.actor}>{profession}</span>
        </div>
    )
}