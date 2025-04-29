import {useState, useEffect, useRef} from "react";

export const useHeader = () => {
    const [isFixed, setIsFixed] = useState(false);
    const prevScroll = useRef(0);

    useEffect(() => {

        function scroll() {
            const scrolled = window.scrollY;
            const isFixed = scrolled > prevScroll.current;
            setIsFixed(isFixed);
            prevScroll.current = scrolled;
        }

        window.addEventListener('scroll', scroll)

        return () => window.removeEventListener('scroll', scroll)
    }, []);

    return isFixed

}