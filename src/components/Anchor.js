import React from "react";
import { Link } from "react-router-dom";

export default function Anchor({ path, text, children, ...rest }) {
    return (
        <Link to={ path } { ...rest }>{ text || children }</Link>
    )
}