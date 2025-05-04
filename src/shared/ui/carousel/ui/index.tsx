import { ReactNode, useEffect, useRef, useState } from "react";
import { Window } from "@/shared/ui/carousel/ui/window";

interface ICarouselProps {
    withButtons?: boolean;
    children?: ReactNode;
}

export const Carousel = ({withButtons, children}: ICarouselProps) => {

    const [cardWidth, setCardWidth] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const [rowLength, setRowLength] = useState(0);

    const windowRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!windowRef.current || !containerRef.current) return;

        const windowWidth = windowRef.current.offsetWidth;
        const containerWidth = containerRef.current.offsetWidth;

        setWindowWidth(windowWidth);
        setContainerWidth(containerWidth);

        const cardWidth = windowRef.current.children[0].clientWidth;
        setRowLength(windowRef.current.children.length)
        setCardWidth(cardWidth);

    }, []);

    return (
        <Window
            withButtons={withButtons}
            cardWidth={cardWidth}
            windowWidth={windowWidth}
            containerWidth={containerWidth}
            rowLength={rowLength}
            windowRef={windowRef}
            containerRef={containerRef}
        >
            {children}
        </Window>

    )
}