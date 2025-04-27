import { Routes, Route } from "react-router-dom";
import { Layout } from "@/pages/layout";
import { Films } from "@/pages/films";
import { Cartoons } from "@/pages/cartoons";
import { Series } from "@/pages/series";
import { Home } from "@/pages/home";


export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/films' element={<Films/>}/>
                <Route path='/cartoons' element={<Cartoons/>}/>
                <Route path='/series' element={<Series/>}/>
            </Route>
        </Routes>
    )
}