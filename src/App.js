import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/Error404";

if(localStorage.getItem('theme') === 'light') {
    document.querySelector('html').classList.add('dark');
    localStorage.setItem('theme', 'light');
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard /> } />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}