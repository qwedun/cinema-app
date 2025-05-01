import { Navigation } from "@/widgets/header/ui/navigation";
import { useHeader } from "@/widgets/header/lib/use-header";
import { SearchIcon } from "@/shared";
import styles from './styles.module.scss';

export const Header = () => {

    const isFixed = useHeader();
    const className = `${styles.header}
     ${isFixed && styles.fixed}`

    return (
        <header className={className}>
            <Navigation/>
            <SearchIcon height={24} width={24} opacity='0.5'/>
        </header>
    )
}