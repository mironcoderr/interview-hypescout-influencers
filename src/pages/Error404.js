import React from "react";
import Anchor from "../components/Anchor";

export default function Error404() {
    return (
        <div className="w-screen h-full sm:h-screen text-center flex items-center justify-center flex-col overflow-x-hidden px-5 py-10">
            <img src="images/404.png" alt="404error" className="w-80 mx-auto mb-4" />
            <h1 className="text-2xl font-black uppercase text-gray">this page cannot be found.</h1>
            <p className="text-sm mb-5">It's looks like nothing was found at this location.</p>
            <Anchor path="/" type="button" className="flex items-center justify-center gap-2 rounded-md py-4 px-5 drop-shadow-lg bg-primary">
                <i className="fa-solid fa-house text-xs text-light"></i>
                <span className="text-xs font-bold uppercase text-light whitespace-nowrap">back to home</span>
            </Anchor>
        </div>
    )
}