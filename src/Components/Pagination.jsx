import React from 'react';
import useProvider from '../Hooks/useProvider';
import useProducts from '../Hooks/useProducts';
import { FaArrowLeft,FaArrowRight  } from "react-icons/fa";

const Pagination = ({ onPageChange }) => {
    const {currentPage, totalPage} = useProvider()
    console.log(totalPage, currentPage);
    const [,refetch] = useProducts()

    const pageNumbers = [];

    // Generate page numbers based on the totalPages
    for (let i = 1; i <= totalPage; i++) {
        pageNumbers.push(i);
    }

    // Handle previous button click
    const handlePrevClick = async () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);                      
            await refetch()
        }
    };

    // Handle next button click
    const handleNextClick = async () => {
        refetch()                   
        if (currentPage < totalPage) {
            onPageChange(currentPage + 1); 
            await refetch()
        }
    };

    return (
        <nav aria-label="Page navigation">
            <ul className="flex items-center justify-center ">
                <li>
                    <button 
                        onClick={handlePrevClick} 
                        className={`px-2 md:px-3 py-2 md:py-3 rounded-full ${currentPage === 1 ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'} border border-gray-300 text-gray-700 hover:bg-[#F5AB41] duration-300 ease-in-out`}
                        disabled={currentPage === 1}
                    >
                        <FaArrowLeft/>
                    </button>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <button
                            onClick={() => onPageChange(number)}
                            className={`px-2 md:px-3 rounded-full mx-1 md:mx-2 py-1 md:py-2 ${currentPage === number ? 'bg-[#F5D649] text-black' : 'bg-white hover:bg-gray-100'} border border-gray-300 text-gray-700 hover:bg-[#F5AB41] duration-300 ease-in-out`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button 
                        onClick={handleNextClick} 
                        className={`px-2 md:px-3 py-2 md:py-3 rounded-full ${currentPage === totalPage ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'} border border-gray-300 text-gray-700 hover:bg-[#F5AB41] duration-300 ease-in-out`}
                        disabled={currentPage === totalPage}
                    >
                        <FaArrowRight/>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
