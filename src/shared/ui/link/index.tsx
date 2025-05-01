import { Link } from "react-router-dom";
import { ReactNode } from "react";
import styles from './styles.module.scss'

interface ILinkProps {
    to: string,
    children: string | ReactNode,
    highlighted?: boolean,
}

export const RouteLink = ({highlighted, to, children}: ILinkProps) => {

    const className = highlighted
        ? `${styles.highlighted} ${styles.link}`
        : styles.link;

    return (
        <Link to={to} className={className}>
            {children}
        </Link>
    )
}