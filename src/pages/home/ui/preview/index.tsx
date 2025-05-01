import { BigMovieCard } from "@/pages/home/ui/big-movie-card";
import { Carousel } from "@/shared";
import { useState, useEffect } from "react";
import { MovieEntity } from "@/shared/api";
import { Queries } from "@/pages/home/api";


export const Preview = () => {

    const [featuredMovies, setFeaturedMovies] = useState<MovieEntity[]>([]);

    useEffect(() => {
        Queries.featuredMovies().then(data => setFeaturedMovies(data));
    }, []);

    return (
        <>
            {
                featuredMovies.length &&
                <Carousel withButtons>
                    <BigMovieCard data={featuredMovies[1]}/>
                    <BigMovieCard data={featuredMovies[2]}/>
                    <BigMovieCard data={featuredMovies[0]}/>
                </Carousel>
            }
        </>
    )
}