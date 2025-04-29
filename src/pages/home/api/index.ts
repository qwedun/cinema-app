import { Movies, client } from "@/shared/api";
import { AxiosResponse } from "axios";

const config = {

}

export const Queries = {
    async newMoviesQuery() {
        const data: AxiosResponse<Movies> = await client.get('/movie', {
            params: {
                'rating.kp': '5-9',
                year: 2025,
                sortField: 'votes.filmCritics',
                sortType: '-1',
                limit: 15,
            },
            paramsSerializer: {
                indexes: null,
            }
        })
        return data;
    }
}