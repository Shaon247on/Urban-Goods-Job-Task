import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];

    // Generate page numbers based on the totalPages
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    // Handle previous button click
    const handlePrevClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    // Handle next button click
    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
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
                        className={`px-3 py-2 rounded-r-lg ${currentPage === totalPages ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'} border border-gray-300 text-gray-700`}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
