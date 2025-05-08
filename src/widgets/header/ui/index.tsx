import { Navigation } from "@/widgets/header/ui/navigation";
import { useHeader } from "@/widgets/header/lib/use-header";
import { SearchIcon } from '@/shared'
import { Modal } from "@/shared";
import { useState } from "react";
import { Search } from "@/features";
import styles from './styles.module.scss';

export const Header = () => {

     const [isOpen, setIsOpen] = useState(false);

    const isFixed = useHeader();
    const className = `${styles.header}
     ${isFixed && styles.fixed}`

    return (
        <header className={className}>
            <Navigation/>
            <div className={styles.search} onClick={() => setIsOpen(true)}>
                <SearchIcon fill='white'/>
                <span>Поиск</span>
            </div>
            <Modal setClose={() => setIsOpen(false)} isOpen={isOpen}>
                <Search/>
            </Modal>
        </header>
    )
}