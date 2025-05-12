import { Avatar, Carousel, Person } from "@/shared";
import styles from './styles.module.scss';

interface IActorsProps {
    data: Person[];
}

export const Actors = ({data}: IActorsProps) => {

    return (
        <div className={styles.container}>
            <h3>Над картиной работали</h3>
            <Carousel>
                {
                    data.map(person => (
                        <Avatar person = {person}/>
                    ))
                }
            </Carousel>
        </div>
    )
}