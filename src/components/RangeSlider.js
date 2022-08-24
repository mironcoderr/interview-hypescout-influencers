import React from "react";
import { Range } from 'react-range';

export default function RangeSlider({ advanceFilterData, setAdvanceFilterData, label, current, setCurrent }) {
    
    React.useEffect(() => {
        setAdvanceFilterData({
            ...advanceFilterData,
            range: current[0]
        })
    }, [current])

    return (
        <div className="mb-5">
            <label className="text-sm capitalize text-focus leading-8 mb-12 inline-block dark:font-medium dark:text-ltitle">{label}</label>
            <Range
                step={200}
                min={1}
                max={1000}
                values={current}
                onChange={(values) => {
                    values[0] === 1 ? setCurrent(values) : setCurrent([values[0] - 1])
                }}
                renderTrack={({ props, children }) => (
                    <div className="h-1 w-full rounded-full mb-3 bg-light dark:bg-lborder" {...props} style={{ ...props.style }}>
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div className="bg-primary w-6 h-6 rounded-full" {...props} style={{ ...props.style }}>
                        <span className="text-sm font-bold relative -top-10 left-1/2 -translate-x-1/2 
                            mb-5 py-1 px-2 rounded bg-primary text-light inline-block
                            after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:rounded-sm
                            after:w-3 after:h-3 after:bg-primary after:-translate-x-1/2 after:rotate-45
                        ">{current}k</span>
                    </div>
                )}
            />
            <ul className="w-full flex items-center justify-between">
                <li>1k</li>
                <li>200k</li>
                <li>400k</li>
                <li>600k</li>
                <li>800k</li>
                <li>1000k</li>
            </ul>
        </div>
    )
}