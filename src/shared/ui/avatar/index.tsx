import { Person } from "@/shared/api";
import { Link } from "react-router-dom";
import styles from './styles.module.scss';

interface IAvatarProps {
    person: Person
}

export const Avatar = ({person}: IAvatarProps) => {

    const {id, photo, name, profession} = person;

    return (
        <Link to={`/name/${id}`} className={styles.container}>
            <div className={styles.imgWrapper}>
                <img src={photo}/>
            </div>
            <span className={styles.name}>{name}</span>
            <span className={styles.actor}>{profession}</span>
        </Link>
    )
}