import { client, MovieEntity } from "@/shared/api";
import { AxiosResponse } from "axios";

export const Queries = {
    async filmByIdQuery(id: string) {
        console.log(id)
        const raw: AxiosResponse<MovieEntity> = await client.get(`/movie/${id}`);
        return raw.data
    }
}