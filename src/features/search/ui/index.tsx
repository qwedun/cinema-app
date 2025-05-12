import { Input } from "@/features/search/ui/input";
import { useDebounce } from "@/features/search/lib";
import { MovieList } from "@/features/search/ui/movie-list";
import { Button } from "@/shared";
import { useState } from "react";
import { useSearchQuery } from "@/features/search/api";
import styles from './styles.module.scss';

export const Search = () => {

    const [request, setRequest] = useState('');
    const debouncedSetRequest = useDebounce(setRequest, 300);

    const {
        movies,
        hasNextPage,
        fetchNextPage,
    } = useSearchQuery(request)

    return (
        <div className={styles.container}>
            <Input data={request} setData={debouncedSetRequest}/>
            <MovieList data={movies}/>
            {
                hasNextPage ?
                    (
                        <Button onClick={() => fetchNextPage()}>
                            Больше фильмов
                        </Button>
                    ) : null
            }
        </div>
    )
}