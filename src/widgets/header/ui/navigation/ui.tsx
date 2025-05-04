import { RouteLink } from "@/shared";
import { LogoIcon } from '@/shared';
import styles from './styles.module.scss';



export const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <LogoIcon height={48} width={48} fill={'red'} opacity={0.5}/>
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