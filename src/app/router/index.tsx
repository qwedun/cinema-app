import { Routes, Route } from "react-router-dom";

const First = () => <div>FIRST</div>

export const Router = () => {
    return (
        <Routes>
            <Route index element={<First/>}/>
        </Routes>
    )
}