import React from "react";
import Logo from "../components/Logo";
import Anchor from "../components/Anchor";

export default function Footer({ data }) {
    return (
        <footer className="bg-gray pt-8 md:pt-28 pb-8 dark:bg-lgray">
            <div className="container px-5 mx-auto flex flex-wrap">
                <div className="p-4 w-full md:w-1/3 md:-mt-12 md:mr-8 xl:w-1/4 xl:mr-0">
                    <Logo path={data.logo.path} src={data.logo.src} alt={data.logo.alt} className="mb-5 h-8 dark:brightness-0" />
                    <p className="text-sm leading-6 mb-6">{data.descrip}</p>
                    <div className="flex items-center justify-start gap-5">
                        {data.social.map((item, index) => (
                            <Anchor key={index} path={item.path} className={`${item.icon} fa-brands text-base dark:text-ltitle hover:text-primary`} />
                        ))}
                    </div>
                </div>
                {data.navs.map((item, index) => (
                    <div key={index} className="py-4 px-4 w-1/2 sm:w-1/3 md:w-1/5 xl:w-1/4 xl:pl-14">
                        <h4 className="text-lg font-bold capitalize mb-3 text-light dark:text-ltitle">{item.title}</h4>
                        <nav className="flex flex-col gap-3">
                            {item.menu.map((item, index) => (
                                <Anchor
                                    key={index}
                                    path={item.path}
                                    text={item.text}
                                    className="text-sm capitalize hover:text-primary"
                                />
                            ))}
                        </nav>
                    </div>
                ))}
                <div className="flex items-center justify-between w-full flex-col-reverse gap-4 sm:flex-row sm:gap-0 mt-3">
                    <p className="text-sm capitalize">{data.bottom.text}</p>
                    <nav className="flex items-center justify-end gap-6">
                        {data.bottom.navs.map((item, index) => (
                            <Anchor
                                key={index}
                                path={item.path}
                                text={item.text}
                                className="text-sm capitalize hover:text-primary"
                            />
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    )
}