import { useSearchParams } from "react-router-dom";

export const usePage = (): [number, (num: number) => void] => {

    const [searchParams, setSearchParams] = useSearchParams();

    const currentPage = Number(searchParams.get('page')) || 1;
    const setCurrentPage = (num : number) => setSearchParams(prev => {
        prev.set('page', String(num));
        return prev;
    })

    return [currentPage, setCurrentPage]
}

export const getPages = (currentPage: number, maxPages: number) => {
    
    const isLeft = maxPages <= 7 ? true : currentPage - 5 < 1;
    const isRight = maxPages <= 7 ? false : currentPage + 5 > maxPages;
    const isCentered = !isLeft && !isRight;

    let pages = [];

    if (isLeft) {
        if (maxPages <= 7) {
            for (let i = 1; i <= maxPages; i++) {
                pages.push(i)
            }
        }
        else pages = [1, 2, 3, 4, 5, 6, 7, '***', maxPages];
    }
    else if (isCentered) pages = [1, '***', currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2, '***', maxPages];
    else pages = [1, '***', maxPages - 6, maxPages - 5, maxPages -4, maxPages - 3, maxPages - 2, maxPages - 1, maxPages];

    return pages
}