import { useParams } from "react-router-dom";
import { useKinobdScript } from "@/widgets/player/api";
import styles from './styles.module.scss'

export const Player = () => {

    const { id } = useParams();

    useKinobdScript();

    return (
        <div>
            <div
                className={styles.player}
                id="kinobd"
                data-kinopoisk={id}>
            </div>
        </div>
    );
};