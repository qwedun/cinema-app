import { Movies, client } from "@/shared/api";
import { AxiosResponse } from "axios";

type Config = Record<string, string | number | boolean>

const defaultConfig: Config = {
    'rating.kp': '5-9',
    movieLength: '1-999',
    year: 2025,
    sortField: 'votes.filmCritics',
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