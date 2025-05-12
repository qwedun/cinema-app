import { Routes, Route } from "react-router-dom";
import { Layout,
    Films,
    Cartoons,
    Series,
    Home,
    Film,
    Watch,
    Name,
} from "@/pages";

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