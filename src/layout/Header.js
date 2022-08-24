import React from "react";
import Logo from "../components/Logo";
import Anchor from "../components/Anchor";

export default function Header({ data }) {

    const groupRef = React.useRef();
    const [open, setOpen] = React.useState(false);
    const [sidebar, setSidebar] = React.useState(false);
    const [icon, setIcon] = React.useState('fa-moon');

    React.useEffect(() => {
        if (localStorage.getItem('theme') !== 'light') setIcon('fa-moon');
        else setIcon('fa-sun');

        document.addEventListener('mousedown', (event) => {
            if (!groupRef.current.contains(event.target)) {
                setOpen(false);
            }
        })
    }, [icon]);


    function lightMode() {
        document.querySelector('html').classList.add('dark');
        localStorage.setItem('theme', 'light');
    }

    function darkMode() {
        document.querySelector('html').classList.remove('dark');
        localStorage.setItem('theme', 'dark');
    }

    const handleLightMode = () => {
        if (localStorage.getItem('theme') !== 'light') {
            lightMode();
            setIcon('fa-sun');
        }
    }

    const handleDarkMode = () => {
        if (localStorage.getItem('theme') !== 'dark') {
            darkMode();
            setIcon('fa-moon');
        }
    }

    const handleSystemMode = () => {
        localStorage.removeItem('theme');
        document.querySelector('html').classList.remove('dark');
    }

    return (
        <header className="bg-gray dark:bg-lgray">
            <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
                <Logo path={data.logo.path} src={data.logo.src} alt={data.logo.alt} className="h-8 dark:brightness-0" />
                <nav className={`lg:py-0 lg:px-0 lg:w-auto lg:h-auto lg:border-none lg:z-0 flex text-base flex-col py-8 px-5 fixed top-0 z-50
                    w-60 h-full bg-gray border-r border-solid border-border ease-in-out duration-300 dark:bg-transparent dark:text-ltext
                    lg:flex-row lg:justify-center lg:items-center lg:static ${sidebar ? "left-0" : "-left-60"}`}>
                    <i className="w-fit fa-solid fa-close text-focus text-lg mx-4 mb-4 lg:hidden" onClick={() => setSidebar(false)}></i>
                    {data.navs.map((item, index) => (
                        <Anchor
                            key={index}
                            path={item.path}
                            className="text-sm capitalize py-2.5 px-4 rounded hover:bg-chalk hover:text-light hover:font-bold"
                        >
                            {item.text}
                        </Anchor>
                    ))}
                </nav>
                {sidebar && <span className="fixed top-0 left-0 w-screen h-screen bg-dark z-30 opacity-80" onClick={() => setSidebar(false)}></span>}
                <div className="flex items-center justify-center gap-5">
                    <button type="button" className="fa-regular fa-bell text-lg dark:text-ltext"></button>
                    <div className="relative leading-none" ref={groupRef}>
                        <button type="button" className={`fa-solid ${icon} text-lg dark:text-ltext`} onClick={() => setOpen(!open)}></button>
                        {open &&
                            <nav className="p-3 rounded-lg bg-gray absolute top-16 right-0 z-50 border border-solid border-border dark:bg-lgray" onClick={() => setOpen(false)}>
                                <button type="button" className="flex items-center justify-start w-40 gap-2 py-1.5 px-4 rounded
                                    text-text hover:text-primary hover:bg-dark dark:hover:text-lgray" onClick={handleLightMode}>
                                    <i className={`fa-solid fa-sun text-base`}></i>
                                    <span className="text-xs capitalize">light</span>
                                </button>
                                <button type="button" className="flex items-center justify-start w-40 gap-2 py-1.5 px-4 rounded 
                                    text-text hover:text-primary hover:bg-dark dark:hover:text-lgray" onClick={handleDarkMode}>
                                    <i className={`fa-solid fa-moon text-base`}></i>
                                    <span className="text-xs capitalize">dark</span>
                                </button>
                                <button type="button" className="flex items-center justify-start w-40 gap-2 py-1.5 px-4 rounded 
                                    text-text hover:text-primary hover:bg-dark dark:hover:text-lgray" onClick={handleSystemMode}>
                                    <i className={`fa-solid fa-desktop text-base`}></i>
                                    <span className="text-xs capitalize">system</span>
                                </button>
                            </nav>
                        }
                    </div>
                    {open && <span className="fixed top-0 left-0 w-screen h-screen bg-dark z-30 opacity-80"></span>}
                    <div className="flex items-center justify-center gap-2 cursor-pointer">
                        <span className="text-xs capitalize hidden sm:block dark:text-ltext">
                            {data.user.name}
                        </span>
                        <img
                            src={data.user.src}
                            alt={data.user.alt}
                            className="w-9 h-9 rounded"
                        />
                    </div>
                    <button type="button" className="fa-solid fa-bars text-lg lg:hidden dark:text-ltext" onClick={() => setSidebar(true)}></button>
                </div>
            </div>
        </header>
    )
}