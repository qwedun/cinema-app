import { PersonInMovie } from "@/shared/api";
import styles from './styles.module.scss';

interface IPreviewProps {
    person: PersonInMovie;
}
export const Preview = ({person} : IPreviewProps) => {

    const {enName, name, photo, profession, birthday} = person
    const date = new Date(birthday);
    const toLocal = date.toLocaleDateString();

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img alt={name} className={styles.img} src={photo}/>
            </div>
            <div className={styles.info}>
                <div>
                    <h2>{name}</h2>
                    <div className={styles.eng}>{enName}</div>
                </div>
                <div className={styles.block}>
                    <div className={styles.row}>
                        <span className={styles.black}>Карьера:</span>
                        <span>
                            {profession.map(el => (
                                el.value + ', '
                            ))}
                        </span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.black}>Дата рождения:</span>
                        <span>{toLocal}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}