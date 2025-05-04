import { usePage, getPages } from "@/shared/ui/pagination/lib";
import { Page } from "@/shared/ui/pagination/ui/page";
import { ArrowIcon } from "@/shared/icons"
import styles from './styles.module.scss';

interface IPaginationProps {
    totalPages: number;
}

export const Pagination = ({totalPages} : IPaginationProps) => {

    const [currentPage, setCurrentPage] = usePage();

    const pages = getPages(currentPage, totalPages);

    return (
        <div className={styles.flex}>

            <div className={styles.page} onClick={() => {
                if (currentPage - 1 > 0) setCurrentPage(currentPage - 1)
            }}>
                <ArrowIcon width={18} height={18} fill='white'/>
            </div>

            {pages.map((page: '***' | number) => {
                if (page === '***') return <div className={styles.dots}>• • •</div>

                return (
                    <Page currentPage={currentPage} page={page} setPage={setCurrentPage}/>
                )
            })}

            <div className={styles.page} onClick={() => {
                if (currentPage + 1 < totalPages) setCurrentPage(currentPage + 1)
            }}>
                <ArrowIcon className={styles.arrow} width={18} height={18} fill='white'/>
            </div>

        </div>
    )
}