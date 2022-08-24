import React from "react";
import Anchor from "./Anchor";

export default function Logo({ path, src, alt, ...rest }) {
    return (
        <Anchor path={ path }>
            <img src={ src } alt={ alt } { ...rest }/>
        </Anchor>
    )
}