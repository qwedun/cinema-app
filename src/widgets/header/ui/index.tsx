import { Navigation } from "@/widgets/header/ui/navigation";
import { useHeader } from "@/widgets/header/lib/use-header";
import styles from './styles.module.scss';

export const Header = () => {

    const isFixed = useHeader();
    const className = `${styles.header}
     ${isFixed && styles.fixed}`

    return (
        <header className={className}>
            <Navigation/>
            <div style={{color: 'white'}}>123</div>
        </header>
    )
}