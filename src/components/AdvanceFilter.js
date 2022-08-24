import React from "react";
import SelectOption from "./SelectOption";
import RangeSlider from "./RangeSlider";
import CheckRadio from "./CheckRadio";

export default function AdvanceFilter({ data, setAdvanceFilterData, advanceFilterData, handleApplyButton, handleResetButton }) {
    const [current, setCurrent] = React.useState([800]);

    const handleSelectOptionindustry = (event) => {
        setAdvanceFilterData({
            ...advanceFilterData,
            industry: event.target.value
        });
    }

    const handleSelectOptionCountry = (event) => {
        setAdvanceFilterData({
            ...advanceFilterData,
            country: event.target.value
        });
    }
    
    const handleSelectOptionSocial = (event) => {
        setAdvanceFilterData({
            ...advanceFilterData,
            social: event.target.value
        });
    }

    const handleCheckRadio = (event) => {
        setAdvanceFilterData({
            ...advanceFilterData,
            gender: event.target.value
        });
    }

    return (
        <div className="absolute top-16 right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-0 z-50 rounded-lg w-80 bg-gray border border-solid border-border dark:bg-lgray">
            <h3 className="text-base font-bold text-light capitalize px-5 py-4 border-b border-solid border-border dark:text-ltitle dark:border-lborder">{data.title}</h3>
            <div className="pt-4 px-5 pb-7">
                <SelectOption
                    label={data.select[0].label}
                    option={data.select[0].option}
                    onChange={handleSelectOptionindustry}
                />
                <SelectOption
                    label={data.select[1].label}
                    option={data.select[1].option}
                    onChange={handleSelectOptionCountry}
                />
                <SelectOption
                    label={data.select[2].label}
                    option={data.select[2].option}
                    onChange={handleSelectOptionCountry}
                />
                <SelectOption
                    label={data.select[3].label}
                    option={data.select[3].option}
                    onChange={handleSelectOptionSocial}
                />
                <RangeSlider 
                    advanceFilterData={ advanceFilterData } 
                    setAdvanceFilterData={ setAdvanceFilterData } 
                    setCurrent={ setCurrent } 
                    current={ current } 
                    label={ data.range.label } 
                />
                <div className="mb-6">
                    <label className="text-sm capitalize text-focus leading-8 mb-3 inline-block dark:text-ltitle">{data.gender.title}</label>
                    <div className="flex items-center justify-start gap-16">
                        {data.gender.radio.map((item, index) => (
                            <CheckRadio
                                key={index}
                                htmlFor={item.htmlFor}
                                label={item.label}
                                value={item.value}
                                name={item.name}
                                id={item.id}
                                onChange={handleCheckRadio}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-end gap-2">
                    <button type="button" className="px-4 py-2 text-sm rounded capitalize
                    bg-dark dark:bg-lborder dark:text-ltext" onClick={handleResetButton}>reset</button>
                    <button type="button" className="px-4 py-2 text-sm rounded capitalize
                    bg-primary text-light" onClick={handleApplyButton}>apply</button>
                </div>
            </div>
        </div>
    )
}