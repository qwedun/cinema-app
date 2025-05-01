import {
    CupIcon,
    FireIcon, HappyIcon,
    HeartIcon,
    KnifeIcon,
    MapIcon, MusicIcon,
    PeopleIcon,
    RocketIcon, TankIcon,
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
                <RouteLink to='films' highlighted>
                    <FireIcon width={width} height={height}/>
                    Новые
                </RouteLink>
                <RouteLink to='comedy' highlighted>
                    <HeartIcon width={width} height={height}/>
                    Мелодраммы
                </RouteLink>
                <RouteLink to='comedy' highlighted>
                    <KnifeIcon width={width} height={height}/>
                    Ужасы
                </RouteLink>
                <RouteLink to='comedy' highlighted>
                    <MapIcon width={width} height={height}/>
                    Приключения
                </RouteLink>
                <RouteLink to='comedy' highlighted>
                    <RocketIcon width={width} height={height}/>
                    Фантастика
                </RouteLink>
                <RouteLink to='comedy' highlighted>
                    <PeopleIcon width={width} height={height}/>
                    Семейные
                </RouteLink>
                <RouteLink to='comedy' highlighted>
                    <HappyIcon width={width} height={height}/>
                    Комедии
                </RouteLink>
                <RouteLink to='comedy' highlighted>
                    <MusicIcon width={width} height={height}/>
                    Концерты
                </RouteLink>
                <RouteLink to='comedy' highlighted>
                    <TankIcon width={width} height={height}/>
                    Военные
                </RouteLink>
            </Carousel>
    )
}