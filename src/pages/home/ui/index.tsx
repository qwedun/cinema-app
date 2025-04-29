import { Carousel } from "@/shared";
import { MovieCard } from "@/entities";
import { Queries } from "@/pages/home/api";
import { useEffect, useState } from "react";
import { Movies } from "@/shared/api";

export const Home = () => {

    const [Movies, setMovies] = useState<Movies>({
        docs: [],
        total: 0,
        limit: 0,
        page: 0,
        pages: 0
    })

    useEffect(() => {
        Queries.newMoviesQuery()
            .then(data=> setMovies(data.data))
    }, []);

    return (
        <Carousel data={Movies}/>
    )
}