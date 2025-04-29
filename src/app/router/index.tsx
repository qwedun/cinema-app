import { Routes, Route } from "react-router-dom";
import { Layout, Films, Cartoons, Series, Home } from "@/pages";

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='films' element={<Films/>}/>
                <Route path='cartoons' element={<Cartoons/>}/>
                <Route path='series' element={<Series/>}/>
            </Route>
        </Routes>
    )
}