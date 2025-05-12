import { client, Movies, PersonInMovie, ApiConfig } from "@/shared";
import { AxiosResponse } from "axios";
import { useParams } from "react-router-dom";
import { useQuery, useInfiniteQuery, InfiniteData } from "@tanstack/react-query";

const Queries = {
    async getPersonInfo(id: string) {
        const data: AxiosResponse<PersonInMovie> = await client.get(`/person/${id}`);
        return data.data;
    },
    async getMoviesByPerson(id: string, page: number) {

        const config: ApiConfig = {
            'persons.id': id,
            limit: 20,
            page: page,
            sortField: ['votes.filmCritics'],
            sortType: '-1',
            notNullFields: ['poster.url', 'name']
        }

        const data: AxiosResponse<Movies> = await client.get(`/movie`, {
            params: config
        })

        return data.data
    }
}

export const useApi = () => {

    const { id } = useParams();

    const {data: person, isPending: isPersonPending, error} = useQuery({
        queryKey: ['person', id],
        queryFn: () => Queries.getPersonInfo(id)
    })

    const {
        data,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useInfiniteQuery<
        Movies,
        Error,
        InfiniteData<Movies>,
        ['movies-by-person', string],
        number
    >({
        queryKey: ['movies-by-person', id],
        queryFn: ({pageParam = 1}) => Queries.getMoviesByPerson(id, pageParam),
        getNextPageParam: (lastPage, allPages) => {
            const maxPages = lastPage.pages;
            const nextPage = allPages.length + 1;
            return nextPage <= maxPages ? nextPage : undefined;
        },
        initialPageParam: 1,
    })

    const movies = data?.pages?.flatMap(page => page.docs) || [];

    return {
        person, isPersonPending,
        movies, hasNextPage, isFetchingNextPage, fetchNextPage
    }
}