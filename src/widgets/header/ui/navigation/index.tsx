import { NavLink } from "react-router-dom";
import { LogoIcon } from '@/shared';
import styles from './styles.module.scss';

export const Navigation = () => {

    const setActive = ({isActive} : {isActive : boolean}) => isActive
        ? `${styles.link} ${styles.active}`
        : styles.link

    return (
        <nav className={styles.nav}>
            <LogoIcon height={48} width={48} fill={'red'} opacity={0.5}/>
            <NavLink className={setActive} to='/'>
                Главная
            </NavLink>
            <NavLink className={setActive} to='/films'>
                Фильмы
            </NavLink>
            <NavLink className={setActive} to='/series'>
                Сериалы
            </NavLink>
            <NavLink className={setActive} to='/cartoons'>
                Мультфильмы
            </NavLink>
        </nav>
    )
}