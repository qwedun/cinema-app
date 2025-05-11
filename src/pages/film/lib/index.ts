import { useParams } from "react-router-dom";
import { Queries } from "@/pages/film/api";
import { useQuery } from "@tanstack/react-query";

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