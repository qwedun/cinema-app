import { GENRES, RATING, SORT, YEARS } from "@/shared";
import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Queries } from "@/widgets/catalog/api";


export const getArrays = () => {

    const genresArray = Object.values(GENRES).map(genre => ({
        name: genre.name,
        queryName: genre.queryName
    }));

    const yearsArray = Object.entries(YEARS).map(el => ({
        name: el[0],
        queryName: el[1]
    }));

    const ratingArray = Object.entries(RATING).map(el => ({
        name: el[0],
        queryName: el[1]
    }));

    const sortArray = Object.entries(SORT).map(el => ({
        name: el[0],
        queryName: el[1]
    }));

    return { genresArray, ratingArray, yearsArray, sortArray }
}

export const getParamsFromUrl = (searchParams: URLSearchParams) => {

    const {ratingArray, genresArray, yearsArray, sortArray} = getArrays();

    const genreQueryName = searchParams.get('genre');
    const ratingQueryName = searchParams.get('rating');
    const yearQueryName = searchParams.get('year');
    const sortQueryName = searchParams.get('sort');

    const page = searchParams.get('page');

    const genreName = genresArray.find(el => el.queryName === genreQueryName ? el.name : '')?.name;
    const ratingName = ratingArray.find(el => el.queryName === ratingQueryName ? el.name : '')?.name;
    const yearName = yearsArray.find(el => el.queryName === yearQueryName ? el.name : '')?.name;
    const sortName = sortArray.find(el => el.queryName === sortQueryName ? el.name : '')?.name;

    return {
        genreQueryName,
        ratingQueryName,
        yearQueryName,
        sortQueryName,

        genreName,
        ratingName,
        yearName,
        sortName,

        page
    }
}
export const useParams = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const {
        genreQueryName, ratingQueryName, sortQueryName, yearQueryName,
        genreName, ratingName, sortName, yearName
    } = getParamsFromUrl(searchParams);

    const [genre, setGenre] = useState({name:genreName || 'Все жанры', queryName: genreQueryName});
    const [rating, setRating] = useState({name:ratingName || 'Любой рейтинг', queryName: ratingQueryName});
    const [years, setYears] = useState({name:yearName || 'Все годы', queryName: yearQueryName});
    const [sort, setSort] = useState({name:sortName || 'Рекомендуемые', queryName: sortQueryName});


    useEffect(() => {

        const params = {
            genre: genre.queryName || '',
            sort: sort.queryName || '',
            year: years.queryName || '',
            rating:rating.queryName || '',
        }

        setSearchParams(params);

    },  [sort, rating, genre, years]);

    return {
        genre, setGenre,
        rating, setRating,
        years, setYears,
        sort, setSort,
        searchParams
    }
}

export const useApi = (type: string, searchParams: URLSearchParams) => {

    const {data, isPending, error} = useQuery({
        queryKey: [type, searchParams.toString()],
        queryFn: () => {
            const params = getParamsFromUrl(searchParams);
            return Queries.getMoviesByUrl(params, type);
        }
    })

    return { data, isPending, error }
}
