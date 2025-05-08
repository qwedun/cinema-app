import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Queries } from "@/pages/film/api";
import { MovieEntity } from "@/shared/api";

export const useMovie = () => {

    const [movie, setMovie] = useState<MovieEntity>({} as MovieEntity);
    const { id } = useParams();


    useEffect(() => {
        Queries.filmByIdQuery(id).then(data => setMovie(data))
        window.scrollTo({left: 0, top:0, behavior:'smooth'})
    }, [id]);

    return movie
}