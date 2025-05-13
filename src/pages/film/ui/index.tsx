import { Preview } from "../ui/preview";
import { Description } from "../ui/description/description";
import { Similar } from "../ui/similar";
import { Actors } from "../ui/actors";
import { Facts } from "@/pages/film/ui/facts";
import { Spinner } from "@/shared";
import { useMovie } from "@/pages/film/api";

const Film = () => {

    const {
        movie,
        isPending,
        error
    } = useMovie();

    if (isPending) return (
        <Spinner filled/>
    )

    else if (movie) return (
        <>
            <Preview data={movie}/>
            <Description data={movie.description} id={movie.id}/>
            {movie.similarMovies?.length ? <Similar data={movie.similarMovies}/> : null}
            <Actors data={movie.persons}/>
            {movie.facts?.length ? <Facts data={movie.facts}/> : null}
        </>
    )
}

export default Film;