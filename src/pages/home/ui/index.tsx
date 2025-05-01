import { Genres } from "./genres";
import { Category } from './category';
import { Preview } from "@/pages/home/ui/preview";

export const Home = () => {
    return (
        <>
            <Preview/>
            <Genres/>
            <Category genre='newFilms'/>
            <Category genre='comedy'/>
            <Category genre='family'/>
            <Category genre='science'/>
            <Category genre='drama'/>
        </>

    )
}