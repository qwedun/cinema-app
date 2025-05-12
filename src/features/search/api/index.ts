import { client, Movies, ApiConfig } from "@/shared";
import { AxiosResponse } from "axios";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

const config: ApiConfig = {
    notNullFields: ['poster.url', 'shortDescription', 'name', 'year', 'rating.kp'],
    limit: 16,
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

export const useSearchQuery = (request: string) => {

    const {
        data,
        hasNextPage,
        fetchNextPage
    } = useInfiniteQuery<
    Movies,
    Error,
    InfiniteData<Movies>,
    ['search-movie', string],
    number
    >({
        queryKey: ['search-movie', request],
        queryFn: ({pageParam = 1}) => Queries.getMoviesByRequest(request, pageParam),
        getNextPageParam: (lastPage, allPages) => {
            const maxPages = lastPage.pages;
            const nextPage = allPages.length + 1;
            return nextPage <= maxPages ? nextPage : undefined;
        },
        initialPageParam: 1,
    })

    const movies = data?.pages?.flatMap(page => page.docs) || [];

    return {
        movies,
        hasNextPage,
        fetchNextPage
    }
}