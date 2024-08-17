import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";


const Card = ({ product }) => {
    const { _id, productName, productImage, price, category, description, brand, ratings, createdAt } = product
    return (
        <div className="relative rounded-md z-20 shadow-md mt-8 dark:bg-gray-800 text-black dark:text-white mx-4 md:h-[660px] lg:h-[600px] ">
            <div className='overflow-hidden rounded-t-md relative h-[280px] flex items-center justify-center'>
                <img src={productImage} alt="" className="zoom-effect absolute hover:scale-105 duration-500 z-0 object-cover object-center w-[70%] h-72 rounded-md  dark:bg-black" />
                <h4 className='font-bold text-[18px] bg-white  text-black px-2 rounded-sm z10 absolute bottom-2 right-3'>${price}</h4>
            </div>
            <div className="flex flex-col justify-between mt-5 p-2 ">
                <div className='mb-4 flex-auto'>
                    <h2 className="text-2xl font-bold tracking-wide mb-3 font-open">{productName}</h2>
                    <h3 className="text-lg font-bold tracking-wide mb-3">{category}</h3>
                    <div className='flex items-center justify-between pr-4'>
                        <h3 className='text-lg font-semibold'>{brand}</h3>
                        <h3 className='text-base text-[#231F2066] dark:text-white flex items-center gap-2'><FaRegStar/>{ratings}</h3>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='flex items-center gap-2'><span className='font-semibold'>Date:</span> {moment(createdAt).format('MMMM Do YYYY')}</p>
                    </div>
                    <p className="dark:text-white mt-1 flex-grow"><span className='font-semibold'>Description:</span> {description}</p>
                </div>
                <Link className='animation-hover px-4 py-2 rounded-lg text-center font-semibold w-[50%] mx-auto text-black' to={`/${_id}`}><button className=''>View Property</button></Link>
            </div>

        </div>
    );
};

export default Card;