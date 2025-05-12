import { client, MovieEntity } from "@/shared";
import { AxiosResponse } from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export const Queries = {
    async filmByIdQuery(id: string) {
        const raw: AxiosResponse<MovieEntity> = await client.get(`/movie/${id}`);
        return raw.data
    }
}

export const useMovie = () => {

    const { id } = useParams();

    const {data, isPending, error} = useQuery({
        queryKey: [id],
        queryFn: () => {
            const data = Queries.filmByIdQuery(id);
            window.scrollTo({left: 0, top:0, behavior:'smooth'});
            return data;
        }
    })

    return { movie: data, isPending, error}
}