import { Link } from "react-router-dom";
import { LogoIcon } from '@/shared';
import styles from './styles.module.scss';

export const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <LogoIcon height={48} width={48} fill={'red'} opacity={0.5}/>
            <Link className={styles.link} to='/'>
                Главная
            </Link>
            <Link className={styles.link} to='/films'>
                Фильмы
            </Link>
            <Link className={styles.link} to='/series'>
                Сериалы
            </Link>
            <Link className={styles.link} to='/cartoons'>
                Мультфильмы
            </Link>
        </nav>
    )
}