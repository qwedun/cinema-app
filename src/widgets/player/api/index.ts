import { useEffect } from 'react';

export const useKinobdScript = () => {
    useEffect(() => {

        const script = document.createElement('script');
        script.src = "//kinobd.net/js/player_.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);
};