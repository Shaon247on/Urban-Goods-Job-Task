import React from 'react';
import useProvider from '../Hooks/useProvider';
import useProducts from '../Hooks/useProducts';

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
            <ul className="inline-flex items-center -space-x-px">
                <li>
                    <button 
                        onClick={handlePrevClick} 
                        className={`px-3 py-2 rounded-l-lg ${currentPage === 1 ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'} border border-gray-300 text-gray-700`}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <button
                            onClick={() => onPageChange(number)}
                            className={`px-3 py-2 ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100'} border border-gray-300 text-gray-700`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button 
                        onClick={handleNextClick} 
                        className={`px-3 py-2 rounded-r-lg ${currentPage === totalPage ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'} border border-gray-300 text-gray-700`}
                        disabled={currentPage === totalPage}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
