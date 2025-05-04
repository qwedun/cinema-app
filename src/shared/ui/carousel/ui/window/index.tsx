import styles from './styles.module.scss';
import { MouseEvent, ReactNode, RefObject, useState } from "react";
import { RouteButton } from "@/shared/ui/carousel/ui/route-button";

interface IWindowProps {
    children?: ReactNode;
    withButtons?: boolean;

    cardWidth: number;
    windowWidth: number;
    containerWidth: number;
    rowLength: number;

    windowRef: RefObject<HTMLDivElement>;
    containerRef: RefObject<HTMLDivElement>;
}

export const Window = (Props: IWindowProps) => {

    const {
        windowRef, containerRef, rowLength,
        windowWidth, cardWidth, containerWidth,
         withButtons, children
    } = Props

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);

    const [canUseLink, setCanUseLink] = useState(true);

    const handleMouseUp = () => {
        setIsDragging(false);
        setCanUseLink(true);

        if (!containerRef.current || !windowRef.current) return;

        if (translateX > 0) {
            setTranslateX(0);
        }
        else if (windowWidth + translateX < containerWidth) {
            if (cardWidth * rowLength <= containerWidth) setTranslateX(0)
            else setTranslateX(containerWidth - windowWidth)
        }
    };

    const handleMouseDown = (e: MouseEvent) => {
        e.preventDefault()

        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.tagName === 'svg') return;

        setIsDragging(true);
        setStartX(e.clientX - translateX);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        setCanUseLink(false);
        setTranslateX(e.clientX - startX);
    };

    const moveRight = () => {
        if (Math.abs(translateX) >= windowWidth) setTranslateX(containerWidth - windowWidth)
        else setTranslateX(prev => prev - cardWidth)
    }

    const moveLeft = () => {
        if (translateX + cardWidth >= 0) setTranslateX(0)
        else setTranslateX(prev => prev + cardWidth);
    }

    return (
        <div ref={containerRef} className={styles.container}
             onMouseDown={handleMouseDown}
             onMouseUp={handleMouseUp}
             onMouseMove={(e) => isDragging && handleMouseMove(e)}
             onMouseLeave={() => isDragging && handleMouseUp()}
        >
            { withButtons &&
                <RouteButton
                    onClick={moveLeft}
                    invisible={translateX + cardWidth / 2 >= 0}
                />}
            { withButtons &&
                <RouteButton
                    onClick={moveRight}
                    invisible={
                    windowWidth + translateX - cardWidth/2 < containerWidth
                    || cardWidth * rowLength <= containerWidth}
                    right
                />}
            <div
                ref={windowRef}
                className={styles.window}
                style={{
                    'transform': `translateX(${translateX}px)`,
                    'pointerEvents': !canUseLink ? 'none' : 'auto',
                }}
            >
                { children }
            </div>
        </div>
    )
}