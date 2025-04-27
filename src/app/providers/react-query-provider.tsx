import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode }  from "react";

interface IQueryProps {
    children: ReactNode
}

const queryClient = new QueryClient();

export const WithQueryProvider = ({children}: IQueryProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}