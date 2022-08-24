import React from "react";
import AdvanceFilter from "./AdvanceFilter";

export default function SearchBar({
    setOpen, open, title, placeholder, btnText, advance, onChange, onSubmit,
    setAdvanceFilterData, advanceFilterData, handleApplyButton, handleResetButton
}) {
    const groupRef = React.useRef();

    React.useEffect(() => {
        document.addEventListener('mousedown', (event) => {
            if (!groupRef.current.contains(event.target)) {
                setOpen(false);
            }
        })
    }, [setOpen]);

    return (
        <div className="flex items-center justify-start flex-col gap-6 py-8 px-6 rounded-lg mb-8 bg-gray md:py-4 md:flex-row md:gap-10 dark:bg-lgray">
            <h3 className="text-2xl font-bold text-light capitalize whitespace-nowrap dark:text-ltitle">{title}</h3>
            <form onSubmit={onSubmit} className="flex items-center justify-start gap-5 w-full flex-col md:flex-row">
                <div className="flex items-center justify-start w-full h-12 rounded bg-chalk border border-border dark:bg-light dark:border-lborder">
                    <i className="fa-solid fa-magnifying-glass text-base p-4"></i>
                    <input type="text" placeholder={placeholder} className="w-full h-full text-base placeholder:text-sm placeholder:capitalize bg-transparent text-light dark:text-ltext" onChange={onChange} />
                </div>
                <div className="relative" ref={groupRef}>
                    <button type="button" className="flex items-center justify-center gap-2 h-12 px-5 rounded bg-primary" onClick={() => setOpen(!open)}>
                        <i className="fa-solid fa-filter text-base text-light"></i>
                        <span className="text-sm font-bold capitalize text-light whitespace-nowrap">{btnText}</span>
                    </button>
                    {open && 
                        <AdvanceFilter 
                            handleResetButton={ handleResetButton } 
                            handleApplyButton={ handleApplyButton } 
                            advanceFilterData={ advanceFilterData } 
                            setAdvanceFilterData={ setAdvanceFilterData } 
                            data={ advance } 
                        />
                    }
                </div>
                {open && <span className="fixed top-0 left-0 w-screen h-screen bg-dark z-30 opacity-80"></span>}
            </form>
        </div>
    )
}