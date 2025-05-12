import { Movies, client, ApiConfig } from "@/shared";
import { AxiosResponse } from "axios";
import { GENRES } from "@/shared";
import { useQuery } from "@tanstack/react-query";

type Genres = 'comedy' | 'science' | 'newFilms' | 'family' | 'drama';

const defaultConfig: ApiConfig = {
    'rating.kp': '5-9',
    movieLength: '1-999',
    year: 2025,
    sortField: ['votes.filmCritics'],
    sortType: '-1',
    limit: 15,
}

export const Queries = {
    async movieByGenreQuery(genre: string) {
        let config;

        if (genre) config = {
            ...defaultConfig,
            'genres.name': genre
        }

        const data: AxiosResponse<Movies> = await client.get('/movie', {
            params: config || defaultConfig
        })

        return data.data.docs;
    },

    async featuredMovies() {

        let config = {
            ...defaultConfig,
            sortField: 'votes.russianFilmCritics',
            limit: 3
        };

        const data: AxiosResponse<Movies> = await client.get('/movie', {
            params: config
        })

        return data.data.docs;
    }
}

export const useMovieByGenreQuery = (genre : Genres)  => {

    const genreName = GENRES[genre].name;
    const queryName = GENRES[genre].queryName;

    const {data: movies, isPending, error} = useQuery({
        queryKey: [genreName],
        queryFn: () => Queries.movieByGenreQuery(queryName)
    })

    return {
        genreName,
        queryName,
        movies,
        isPending,
        error
    }
}

export const useFeatureMoviesQuery = () => {

    const {data: movies, isPending, error} = useQuery({
        queryKey: ['feature-movies-preview'],
        queryFn: () => Queries.featuredMovies(),
    })

    return {
        movies,
        isPending,
        error
    }
}