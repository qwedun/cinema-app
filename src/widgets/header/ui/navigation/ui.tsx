import { RouteLink } from "@/shared";
import styles from './styles.module.scss';



export const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <RouteLink to='/'>
                Главная
            </RouteLink>
            <RouteLink to='/films'>
                Фильмы
            </RouteLink>
            <RouteLink to='/series'>
                Сериалы
            </RouteLink>
            <RouteLink to='/cartoons'>
                Мультфильмы
            </RouteLink>
        </nav>
    )
}