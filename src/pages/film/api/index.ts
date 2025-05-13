import { client, Images, MovieEntity, Movies } from "@/shared";
import { AxiosResponse } from "axios";
import { useParams } from "react-router-dom";
import { InfiniteData, useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const Queries = {
    async filmByIdQuery(id: string) {
        const raw: AxiosResponse<MovieEntity> = await client.get(`/movie/${id}`);
        return raw.data
    },
    async imagesByIdQuery(id: number, page: number) {
        const raw: AxiosResponse<Images> = await client.get('/image', {
            params: {
                movieId: id,
                page: page,
                limit: 15
            }
        })
        return raw.data;
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

export const useImages = (id: number) => {

    const {
        data,
        hasNextPage,
        fetchNextPage
    } = useInfiniteQuery<
    Images,
    Error,
    InfiniteData<Images>,
    ['images-in-movie', number],
    number
    >({
        queryKey: ['images-in-movie', id],
        queryFn: ({pageParam = 1}) => Queries.imagesByIdQuery(id, pageParam),
        getNextPageParam: (lastPage, allPages) => {
            const maxPages = lastPage.pages;
            const nextPage = allPages.length + 1;
            return nextPage <= maxPages ? nextPage : undefined;
        },
        initialPageParam: 1
    })

    const images = data?.pages?.flatMap(img => img.docs);

    return {
        images,
        fetchNextPage,
        hasNextPage
    }

}
