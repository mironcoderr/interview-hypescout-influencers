import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import Anchor from "../components/Anchor";
import SearchBar from "../components/SearchBar";

export default function Profile({ data }) {
    const [open, setOpen] = React.useState(false);
    const [user, setUser] = React.useState(data.profile);
    const [advanceFilterData, setAdvanceFilterData] = React.useState({
        industry: null, country: null, social: null, range: null, gender: null
    });
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(user.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(user.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, user]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % user.length;
        setItemOffset(newOffset);
    };

    const handleApplyButton = (event) => {
        let allUser = data.profile;
        if (advanceFilterData.country) allUser = allUser.filter(item => item.meta[0].text.toLowerCase().includes(advanceFilterData.country.toLowerCase()));
        if (advanceFilterData.range) allUser = allUser.filter(item => item.follower.value <= advanceFilterData.range);
        if (advanceFilterData.gender) allUser = allUser.filter(item => item.gender.value.toLowerCase().includes(advanceFilterData.gender));
        if (advanceFilterData.industry) allUser = allUser.filter(item => item.category.value.toLowerCase().includes(advanceFilterData.industry));
        if (advanceFilterData.social) allUser = allUser.filter(item => (item.social.filter(social => social.name.toLowerCase().includes(advanceFilterData.social))).length === 0 ? false : true);
        setUser(allUser);
        setOpen(false);
    }

    const handleResetButton = (event) => {
        setAdvanceFilterData({
            industry: null, country: null, social: null, range: null, gender: null
        });
        setUser(data.profile);
        setOpen(false);
    }
    return (
        <>
            <section className="text-gray-400 bg-dark body-font dark:bg-light">
                <div className="container px-5 pt-8 pb-20 mx-auto">
                    <SearchBar
                        setOpen={setOpen}
                        open={open}
                        handleResetButton={handleResetButton}
                        handleApplyButton={handleApplyButton}
                        advanceFilterData={advanceFilterData}
                        setAdvanceFilterData={setAdvanceFilterData}
                        title={`profile (${user.length})`}
                        placeholder={data.search.placeholder}
                        btnText={data.search.btnText}
                        advance={data.filter}
                        onSubmit={(e) => e.preventDefault()}
                        onChange={(e) => setUser(data.profile.filter(item => item.name.toLowerCase().includes(e.target.value)))}
                    />
                    <div className="flex flex-wrap -m-4">
                        {currentItems.map((item, index) => (
                            <div key={index} className="p-4 w-full lg:w-1/3 md:w-1/2 sm:max-w-md sm:mx-auto">
                                <div className="flex flex-col items-center text-center py-12 rounded-lg border border-solid border-gray bg-gray hover:border-text dark:bg-lgray dark:border-transparent dark:hover:border-lborder">
                                    <img alt={item.alr} src={item.src} className="flex-shrink-0 rounded-lg w-36 h-36 object-cover object-center mb-4" />
                                    <h3 className="text-light text-2xl font-bold capitalize mb-1.5 dark:text-ltitle">{item.name}</h3>
                                    {item.meta.map((item, index) => (
                                        <div key={index} className="flex items-center justify-start gap-1.5 mb-2">
                                            <i className={`${item.icon} text-lg dark:text-ltext`}></i>
                                            <span className="text-base font-normal capitalize dark:text-lblack">{item.text}</span>
                                        </div>
                                    ))}
                                    <div className="flex items-center justify-center gap-5 pt-4 mb-6">
                                        {item.social.map((item, index) => (
                                            <Anchor key={index} path={item.path} className={`${item.icon} fa-brands text-base hover:text-primary dark:text-primary`} />
                                        ))}
                                    </div>
                                    <ul className="flex items-center justify-between gap-4">
                                        <li className="flex items-center justify-center flex-col p-2.5 rounded border border-dashed border-text dark:border-llight dark:border-opacity-50">
                                            <span className="text-sm text-focus capitalize dark:text-primary dark:font-bold">{item.follower.value}k</span>
                                            <span className="text-sm capitalize dark:text-lblack">{item.follower.title}</span>
                                        </li>
                                        <li className="flex items-center justify-center flex-col p-2.5 rounded border border-dashed border-text dark:border-llight dark:border-opacity-50">
                                            <span className="text-sm text-focus capitalize dark:text-primary dark:font-bold">{item.category.value}</span>
                                            <span className="text-sm capitalize dark:text-lblack">{item.category.title}</span>
                                        </li>
                                        <li className="flex items-center justify-center flex-col p-2.5 rounded border border-dashed border-text dark:border-llight dark:border-opacity-50">
                                            <span className="text-sm text-focus capitalize dark:text-primary dark:font-bold">{item.gender.value}</span>
                                            <span className="text-sm capitalize dark:text-lblack">{item.gender.title}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ReactPaginate
                        breakLabel="..."
                        onPageChange={handlePageClick}
                        renderOnZeroPageCount={null}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        nextLabel="next >"
                        previousLabel="< previous"
                        containerClassName="flex items-center justify-center w-full mt-8"
                        previousClassName="page-prev grow hover:text-primary text-sm capitalize dark:text-ltitle dark:font-medium"
                        nextClassName="page-next grow text-end hover:text-primary text-sm capitalize dark:text-ltitle dark:font-medium"
                        pageLinkClassName="page-link sm:w-10 sm:h-10 sm:leading-10 text-sm w-7 h-7 leading-7 rounded-full text-center inline-block hover:text-light hover:bg-gray dark:font-medium dark:text-ltitle dark:hover:text-light"
                        activeLinkClassName="page-active"
                    />
                </div>
            </section>
        </>
    )
}