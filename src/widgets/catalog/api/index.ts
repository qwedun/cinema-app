import { client, Movies, ApiConfig } from "@/shared";
import { AxiosResponse } from "axios";

const defaultConfig: ApiConfig = {
    notNullFields: ['name', 'id', 'rating.kp', 'poster.url', 'year'],
    'rating.kp': '5-9',
    sortField: ['votes.filmCritics'],
    year: 2025,
    sortType: '-1',
    limit: 30,
    selectFields: ['name', 'id', 'rating', 'poster', 'year']
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
            sortField: [sortQueryName],
        }

        if (type !== 'tv-series') config = {
            ...config,
            movieLength: '1-999',
            notNullFields: [...config.notNullFields, 'movieLength'],
            selectFields: [...config.selectFields, 'movieLength']
        }

        const raw: AxiosResponse<Movies> = await client.get('/movie', {
            params: config,
        })

        return raw.data
    }
}