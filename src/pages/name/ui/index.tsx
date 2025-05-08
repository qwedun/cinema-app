import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Preview } from "@/pages/name/ui/preview";
import { Facts } from "@/pages/name/ui/facts";
import { Movies } from "@/pages/name/ui/movies";
import { MovieEntity, PersonInMovie } from "@/shared/api";
import { Queries } from "@/pages/name/api";
import styles from './styles.module.scss';

export const Name = () => {

    const { id } = useParams();
    const [actor, setActor] = useState<PersonInMovie>();
    const [movies, setMovies] = useState<MovieEntity[]>()

    useEffect(() => {
        Queries.getPersonInfo(id).then(data => setActor(data));
        Queries.getMoviesByPerson(id).then(data => setMovies(data));
    }, []);

    return (
        <div className={styles.container}>
            {actor && <Preview person={actor}/>}
            {movies?.length && <Movies data={movies}/>}
            {actor?.facts?.length && <Facts data={actor.facts}/>}
        </div>
    )
}