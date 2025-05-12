import { ArrowIcon } from '@/shared';
import styles from './styles.module.scss';

interface IRouteButtonProps {
    right?: boolean;
    onClick?: () => void;
    invisible?: boolean;
}

export const RouteButton = ({right, onClick, invisible} : IRouteButtonProps) => {

    const invisibleStyle = invisible ? styles.invisible : '';

    const buttonStyle = right
        ? styles.right
        : styles.left

    const arrowStyle = right
        ? styles.rightArrow
        : ''

    return (
        <button onClick={onClick}
            className={`${styles.button} ${buttonStyle} ${invisibleStyle}`}>
            <ArrowIcon
                className={arrowStyle}
                height='24'
                width='24'
                fill='white'
            />
        </button>
    )
}