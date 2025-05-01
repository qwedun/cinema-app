import styles from './styles.module.scss';
import { Avatar, Carousel } from "@/shared";
import { Person } from "@/shared/api";

interface IActorsProps {
    data: Person[];
}

export const Actors = ({data}: IActorsProps) => {

    return (
        <div className={styles.container}>
            <h3 className={styles.head}>Над картиной работали</h3>
            <Carousel>
                {data.map(person => (
                    <Avatar
                        src={person.photo}
                        profession={person.profession}
                        name={person.name}
                    />
                ))}
            </Carousel>
        </div>
    )
}