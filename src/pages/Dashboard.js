import React from "react";
import Header from "../layout/Header";
import Profile from "../layout/Profile";
import Footer from "../layout/Footer";

// json data
import header from "../data/header.json";
import profile from "../data/profile.json";
import footer from "../data/footer.json";

export default function Dashboard() {
    return (
        <>
            <Header data={ header } />
            <Profile data={ profile } />
            <Footer data={ footer } />
        </>
    )
}