import styles from './styles.module.scss';
import { FactInMovie } from "@/shared/api";

interface IFactsProps {
    data: FactInMovie[];
}

export const Facts = ({data} : IFactsProps) => {
    return (
        <div className={styles.container}>
            <h3>А вы знали, что...</h3>
            {data.map(fact => (
                <p className={styles.fact}
                   dangerouslySetInnerHTML={{__html: fact.value}}>
                </p>
            ))}
        </div>
    )
}