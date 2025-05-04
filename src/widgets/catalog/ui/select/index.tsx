import styles from './styles.module.scss';
import { SortIcon, ArrowIcon } from "@/shared";

type Genre = {
    name: string;
    queryName: string;
}

interface ISelectProps {
    param: Genre;
    children: string;
    slots: Genre[];
    withSortIcon?: boolean;
    right?: boolean;
    visible: boolean;
    setType: () => void;
    setParams: (param: Genre) => void;
}

export const Select = ({param, children, slots, withSortIcon, right, setType, visible, setParams} : ISelectProps) => {

    return (
        <div className={styles.select}>
            <span className={styles.info} onClick={setType}>
                {withSortIcon && <SortIcon/>}
                {children}
                <ArrowIcon className={styles.arrow} fill='white'/>
            </span>
            {visible && (
                <div className={`${styles.menu} ${right ? styles.right : styles.left}`}>
                    {slots.map(slot => {

                        const highlighted = slot.name === param.name ? styles.highlighted : ''

                        return (
                            <div className={`${styles.item} ${highlighted}`}
                                 onClick={() => {
                                     setType();
                                     setParams({name: slot.name, queryName: slot.queryName})
                                 }}>
                                {slot.name}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}