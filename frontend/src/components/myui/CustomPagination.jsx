import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "react-js-pagination";

const CustomPagination = ({ resPerPage, filteredProductsCount }) => {

    const [currentPage, setCurrentPage] = useState();

    let [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const page = Number(searchParams.get("page")) || 1;

    useEffect(() => {
        setCurrentPage(page);
    }, [page]);

    const setCurrentPageNo = (pageNumber) => {
        setCurrentPage(pageNumber);

        if (searchParams.has("page")) {
            searchParams.set("page", pageNumber);
        } else {
            searchParams.append("page", pageNumber);
        }

        const path = window.location.pathname + "?" + searchParams.toString();
        navigate(path);
    };

    return (
        <>
            <div className="my-5 rounded-md text-background_1">
                {filteredProductsCount > resPerPage && (
                    <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={resPerPage}
                        totalItemsCount={filteredProductsCount}
                        onChange={setCurrentPageNo}
                        nextPageText={"Next"}
                        prevPageText={"Prev"}
                        itemClass="bg-color_1 px-3.5 py-1 rounded"
                        linkClass="text-background_1"
                        innerClass='flex justify-center gap-1 items-center text-background_2 text-lg'
                    />
                )}
            </div>
        </>
    )
}

export default CustomPagination