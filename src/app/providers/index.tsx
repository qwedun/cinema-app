import { WithQueryProvider } from "@/app/providers/react-query-provider";
import { WithBrowserProvider } from "@/app/providers/react-router-dom-provider";
import { ReactNode } from "react";

interface IProvidersProps {
    children: ReactNode
}

export const WithProviders = ({children}: IProvidersProps) => {
    return (
        <WithQueryProvider>
            <WithBrowserProvider>
                {children}
            </WithBrowserProvider>
        </WithQueryProvider>
    )
}