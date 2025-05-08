import { client } from "@/shared/api";
import { Movies } from "@/shared/api";
import { AxiosResponse } from "axios";

type Config = {
    'rating.kp': string | number;
    movieLength?: string;
    sortField: string;
    year: string | number;
    sortType: string;
    limit: number;
    'genres.name'?: string;
    notNullFields: string[];
    selectFields: string[];
    type?: string;
}

const defaultConfig: Config = {
    notNullFields: ['name', 'id', 'rating.kp', 'poster.url', 'movieLength', 'year'],
    'rating.kp': '5-9',
    sortField: 'votes.filmCritics',
    year: 2025,
    sortType: '-1',
    limit: 30,
    selectFields: ['name', 'id', 'rating', 'poster', 'movieLength', 'year']
}


export const Queries = {
    async getMoviesByUrl(params: Record<string, string>, type: string) {

        const { genreQueryName, sortQueryName, page } = params;
        const years = params.yearQueryName || '1900-2025';
        const rating = params.ratingQueryName || '5-9';

        let config = {
            ...defaultConfig,
            year: years,
            type: type,
            'rating.kp': rating,
            page: page
        }

        if (genreQueryName) config = {
            ...config,
            'genres.name': genreQueryName
        }

        if (sortQueryName) config = {
            ...config,
            sortField: sortQueryName,
        }

        if (type !== 'tv-series') config = {
            ...config,
            movieLength: '1-999'
        }


        const raw: AxiosResponse<Movies> = await client.get('/movie', {
            params: config,
        })

        return raw.data
    }
}