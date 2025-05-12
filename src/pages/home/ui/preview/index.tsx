import { BigMovieCard } from "@/pages/home/ui/big-movie-card";
import { Carousel, Spinner } from "@/shared";
import { useFeatureMoviesQuery } from "@/pages/home/api";


export const Preview = () => {

    const {
        movies,
        isPending,
        error
    } = useFeatureMoviesQuery();

    if (isPending) return (
        <Spinner filled/>
    )

    else return (
        <Carousel withButtons>
            <BigMovieCard data={movies[1]}/>
            <BigMovieCard data={movies[2]}/>
            <BigMovieCard data={movies[0]}/>
        </Carousel>
    )
}