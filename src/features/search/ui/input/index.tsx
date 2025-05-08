import { useState, FocusEvent } from "react";
import { SearchIcon, CloseIcon } from "@/shared";
import styles from './styles.module.scss'

interface IInputProps {
    setData: (data: string) => void;
    data: string;
}

export const Input = ({setData, data} : IInputProps) => {

    const [labelStyle, setLabelStyle] = useState(styles.labelStart)

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        if (e.target.value) setLabelStyle(styles.labelEnd);
        else setLabelStyle(styles.labelEnd);
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        if (e.target.value) setLabelStyle(styles.labelEnd);
        else setLabelStyle(styles.labelStart);
    }

    return (
        <div className={styles.container}>
            <SearchIcon className={styles.search}/>
            {
                data && (
                    <CloseIcon
                        onClick={() => setData('')}
                        width={12} height={12}
                        className={styles.close}
                    />
                )
            }
            <label className={`${styles.label} ${labelStyle}`}>Фильм, мультфильм, сериал</label>
            <input className={styles.input}
                   onChange={(e) => setData(e.target.value)}
                   onFocus={(e) => handleFocus(e)}
                   onBlur={(e) => handleBlur(e)}
            />
        </div>
    )
}