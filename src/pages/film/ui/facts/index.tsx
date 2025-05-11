import { FactInMovie } from "@/shared/api";
import { useState } from "react";
import { Button } from "@/shared";
import styles from './styles.module.scss';

interface IFactsProps {
    data: FactInMovie[];
}

export const Facts = ({data} : IFactsProps) => {

    const [isHidden, setIsHidden] = useState(true);

    return (
        <div className={styles.container}>
            <h2>А вы знали, что...</h2>
            {
                data.map((fact, i) => {
                    if (!isHidden || isHidden && i <= 5) return (
                        <p className={styles.fact}
                           dangerouslySetInnerHTML={{__html: fact.value}}>
                        </p>
                    )
                    return null
                })
            }
            {
                data.length > 5 ? (
                    <Button onClick={() => setIsHidden(!isHidden)}>
                        {
                            isHidden ? (
                                'Показать больше'
                            ) : 'Скрыть'
                        }
                    </Button>
                ) : null
            }
        </div>
    )
}