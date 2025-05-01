import { Preview } from "../ui/preview";
import { Description } from "../ui/description/description";
import { Similar } from "../ui/similar";
import { Actors } from "../ui/actors";
import { Facts } from "@/pages/film/ui/facts";
import { useMovie } from "@/pages/film/lib";


export const Film = () => {

    const movie = useMovie();

    if (movie.name) return (
        <>
            <Preview data={movie}/>
            <Description data={movie.description}/>
            {movie.similarMovies.length ? <Similar data={movie.similarMovies}/> : null}
            <Actors data={movie.persons}/>
            {movie.facts.length ? <Facts data={movie.facts}/> : null}
        </>
    )
    return <div>LOADING</div>
}