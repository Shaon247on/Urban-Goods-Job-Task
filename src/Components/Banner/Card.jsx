import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({product}) => {
    const {_id,productName, productImage, price, category, description,brand,ratings, createdAt}= product
    return (
        <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mx-4 md:h-[660px] lg:h-[660px] ">
            <div className='overflow-hidden rounded-t-md relative h-[280px] '>
                <img src={productImage} alt="" className="zoom-effect absolute z-0 object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />                
                <h4 className='font-bold text-[18px] bg-white text-black px-2 rounded-sm z10 absolute bottom-2 right-3'>${price}</h4>
            </div>
            <div className="flex flex-col justify-between mt-5 p-2">
                <div className='mb-4 flex-auto h-[260px] lg:h-[250px]'>
                    <h2 className="text-2xl font-bold tracking-wide mb-3 font-open">{productName}</h2>
                    <h3 className="text-lg font-bold tracking-wide mb-3">{category}</h3>
                    <h3 className='text-lg font-semibold'>{brand}</h3>
                    <h3 className='text-base text-[#231F2066]'>{ratings}</h3>
                    <div className='flex items-center justify-between'>                        
                        <p className='flex items-center gap-2'> {createdAt}-Bedroom</p>
                    </div>
                    <p className="dark:text-gray-800 mt-1 flex-grow"><span className='font-semibold'>Description:</span> {description}</p>
                </div>
                <Link className='btn bg-gradient-to-t from-[#8E793E] to-[#AD974F] border-0 hover:bg-gradient-to-t  hover:from-[#725f3a] hover:to-[#ac9b65] text-white' to={`/${_id}`}><button>View Property</button></Link>
            </div>

        </div>
    );
};

export default Card;