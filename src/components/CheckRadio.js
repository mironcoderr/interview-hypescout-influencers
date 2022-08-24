import React from "react";

export default function CheckRadio({ label, id, htmlFor, name, value, ...rest }) {
    return (
        <label htmlFor={htmlFor} className="radio-label relative w-fit cursor-pointer flex items-center justify-start gap-2.5">
            <input type="radio" id={id} name={name} value={value} className="opacity-0 invisible absolute" {...rest} />
            <span
                className="relative w-5 h-5 rounded-full bg-gray dark:bg-lborder
                border border-solid border-text before:absolute before:content-[''] before:top-1/2 
                before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:w-2.5 before:h-2.5
                before:rounded-full before:border before:border-solid before:border-text">
            </span>
            <small className="text-sm capitalize dark:text-ltext">{label}</small>
        </label>
    )
}