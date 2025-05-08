import { Input } from "@/features/search/ui/input";
import { useDebounce } from "@/features/search/lib";
import { MovieList } from "@/features/search/ui/movie-list";
import { LoadMore } from "@/features/search/ui/load-more";
import { useEffect, useState } from "react";
import { MovieEntity } from "@/shared/api";
import { Queries } from "@/features/search/api";
import styles from './styles.module.scss';

export const Search = () => {

    const [request, setRequest] = useState('');
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState<MovieEntity[]>([]);
    const debouncedSetRequest = useDebounce(setRequest, 300);

    useEffect(() => {
        if (!request) return

        setPage(1);
        Queries.getMoviesByRequest(request, page)
            .then(data => setMovies(data.docs));
    }, [request]);

    useEffect(() => {
        if (!request) return

        Queries.getMoviesByRequest(request, page)
            .then(data => setMovies(prev => {
                return [...prev, ...data.docs]
            }))
    }, [page]);

    return (
        <div className={styles.container}>
            <Input data={request} setData={debouncedSetRequest}/>
            <MovieList data={movies}/>
            { movies.length ?
                (
                    <LoadMore
                        onClick={() => setPage(prev => prev + 1)}
                    />
                ) : null
            }
        </div>
    )
}