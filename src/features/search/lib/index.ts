export const useDebounce = (func : (str: string) => void, ms: number) => {

    let timeout: ReturnType<typeof setTimeout> | null = null;

    return function(str: string) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(str), ms);
    }
}