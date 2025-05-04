import { GENRES, RATING, SORT, YEARS } from "@/shared";


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