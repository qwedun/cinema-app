import { BrowserRouter } from "react-router-dom";
import { ReactNode } from "react";

interface IBrowserProps {
    children: ReactNode
}

export const WithBrowserProvider = ({children}: IBrowserProps) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    )
}