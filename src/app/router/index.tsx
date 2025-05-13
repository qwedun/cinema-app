import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "@/pages/layout/ui";

const Home = lazy(() => import('@/pages/home/ui'));
const Films = lazy(() => import('@/pages/films/ui'));
const Cartoons = lazy(() => import('@/pages/cartoons/ui'));
const Series = lazy(() => import('@/pages/series/ui'));
const Film = lazy(() => import('@/pages/film/ui'));
const Watch = lazy(() => import('@/pages/watch/ui'));
const Name = lazy(() => import('@/pages/name/ui'));

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='films' element={<Films/>}/>
                <Route path='films/:id' element={<Film/>}/>
                <Route path='films/:id/watch' element={<Watch/>}/>
                <Route path='cartoons' element={<Cartoons/>}/>
                <Route path='series' element={<Series/>}/>
                <Route path='name/:id' element={<Name/>}/>
            </Route>
        </Routes>
    )
}