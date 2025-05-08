import {
    CupIcon,
    FireIcon,
    HappyIcon,
    HeartIcon,
    KnifeIcon,
    MapIcon,
    MusicIcon,
    PeopleIcon,
    RocketIcon,
    TankIcon,
} from "@/shared";
import { RouteLink } from '@/shared';
import { Carousel } from "@/shared";

export const Genres = () => {

    const width = 24;
    const height = 24;

    return (
            <Carousel>
                <RouteLink to='films' highlighted>
                    <CupIcon width={width} height={height}/>
                    Лучшие
                </RouteLink>
                <RouteLink to='films?year=2024-2025' highlighted>
                    <FireIcon width={width} height={height}/>
                    Новые
                </RouteLink>
                <RouteLink to='films?genre=мелодрама' highlighted>
                    <HeartIcon width={width} height={height}/>
                    Мелодраммы
                </RouteLink>
                <RouteLink to='films?genre=ужасы' highlighted>
                    <KnifeIcon width={width} height={height}/>
                    Ужасы
                </RouteLink>
                <RouteLink to='films?genre=приключения' highlighted>
                    <MapIcon width={width} height={height}/>
                    Приключения
                </RouteLink>
                <RouteLink to='films?genre=фантастика' highlighted>
                    <RocketIcon width={width} height={height}/>
                    Фантастика
                </RouteLink>
                <RouteLink to='films?genre=семейный' highlighted>
                    <PeopleIcon width={width} height={height}/>
                    Семейные
                </RouteLink>
                <RouteLink to='films?genre=комедия' highlighted>
                    <HappyIcon width={width} height={height}/>
                    Комедии
                </RouteLink>
                <RouteLink to='films?genre=концерт' highlighted>
                    <MusicIcon width={width} height={height}/>
                    Концерты
                </RouteLink>
                <RouteLink to='films?genre=военный' highlighted>
                    <TankIcon width={width} height={height}/>
                    Военные
                </RouteLink>
            </Carousel>
    )
}