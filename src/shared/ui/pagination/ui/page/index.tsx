import styles from './../styles.module.scss';

interface IPageInterface {
    currentPage: number;
    page: number;
    setPage: (num : number) => void;
}

export const Page = ({page, setPage, currentPage} : IPageInterface) => {

    const highlighted = currentPage === page ? styles.highlighted : '';

    return (
        <div
            className={`${styles.page} ${highlighted}`}
            onClick={() => {
                setPage(page)
                window.scrollTo({left: 0, top: 0, behavior: "smooth"})
            }}
        >{page}
        </div>
    )
}