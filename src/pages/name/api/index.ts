import { client, Movies, PersonInMovie } from "@/shared/api";
import { AxiosResponse } from "axios";

export const Queries = {
    async getPersonInfo(id: string) {
        const data: AxiosResponse<PersonInMovie> = await client.get(`/person/${id}`);
        return data.data;
    },
    async getMoviesByPerson(id: string) {
        const data: AxiosResponse<Movies> = await client.get(`/movie`, {
            params: {
                'persons.id': id,
                limit: 20,
                page: 1,
                sortField: 'votes.filmCritics',
                sortType: '-1',
                notNullFields: ['poster.url', 'name']
            }
        })
        return data.data.docs
    }
}