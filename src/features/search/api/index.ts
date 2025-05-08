import {client, Movies} from "@/shared/api";
import {AxiosResponse} from "axios";

const config = {
    notNullFields: ['poster.url', 'shortDescription', 'name', 'year', 'rating.kp'],
    limit: 30,
}

export const Queries = {
    async getMoviesByRequest(request: string, page: number) {
        const raw: AxiosResponse<Movies> = await client.get('/movie/search', {
            params: {
                query: request,
                page: page,
                ...config
            },
        });
        return raw.data;
    }
}