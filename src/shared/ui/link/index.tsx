import { Link } from "react-router-dom";
import { ReactNode } from "react";
import styles from './styles.module.scss'

interface ILinkProps {
    to: string,
    children: string,
    highlighted?: boolean,
    icon?: ReactNode,
}

export const RouteLink = ({highlighted, icon, to, children}: ILinkProps) => {

    const className = highlighted
        ? `${styles.highlighted} ${styles.link}`
        : styles.link;

    return (
        <Link to={to} className={className}>
            {icon}
            {children}
        </Link>
    )
}