import { ReactNode } from "react";
import styles from './styles.module.scss';

interface IButtonProps {
    onClick: () => void;
    children: ReactNode;
}

export const Button = ({onClick, children} : IButtonProps) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    )
}