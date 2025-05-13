import { Preview } from "@/pages/name/ui/preview";
import { Facts } from "@/pages/name/ui/facts";
import { MovieList } from "@/pages/name/ui/movies";
import { useApi } from "@/pages/name/api";
import { Button, Spinner } from "@/shared";
import styles from './styles.module.scss';

const Name = () => {

    const {
        person,
        isPersonPending,
        movies,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage
    } = useApi()

    if (isPersonPending) return (
        <Spinner filled/>
    )

    return (
        <div className={styles.container}>
            <Preview person={person}/>
            {
                !movies ? (
                    <Spinner/>
                ) : <MovieList data={movies}/>
            }
            {
                isFetchingNextPage ? (
                    <Spinner/>
                ) : null
            }
            {
                hasNextPage ? (
                    <Button onClick={() => fetchNextPage()}>
                        Показать еще
                    </Button>
                ) : null
            }
            {
                person?.facts?.length ? (
                    <Facts data={person.facts}/>
                ) : null
            }
        </div>
    )
}

export default Name;