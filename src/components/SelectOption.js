import React from "react";

export default function SelectOption({ label, option, onChange }) {
    return (
        <div className="relative mb-5">
            <i className="fa-solid fa-angle-down absolute top-12 right-4"></i>
            <label className="text-sm capitalize text-focus leading-8 dark:text-ltitle dark:font-medium">{label}</label>
            <select className="w-full h-11 py-3 px-4 rounded text-sm capitalize bg-dark appearance-none dark:bg-light" onChange={onChange}>
                <option defaultValue>select option</option>
                {option.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}