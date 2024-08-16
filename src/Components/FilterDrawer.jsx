import React from 'react';
import BrandSelect from './BrandSelect';
import PriceRange from './PriceRange';
import CategorySelect from './CategorySelect ';
import { GiHamburgerMenu } from "react-icons/gi";

const FilterDrawer = ({ products, register, value, setValue, handleReset }) => {
    return (
        <div className='z-30 relative'>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <label htmlFor="my-drawer" className="w-44 bg-[#419577] px-4 py-2 font-semibold text-lg flex items-center gap-2 justify-center"><GiHamburgerMenu />Filter Products</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <h1 className='text-3xl font-semibold mb-10 mt-3 text-[#419577]'>Filter Your Products:</h1>
                        <CategorySelect products={products} register={register}></CategorySelect>
                        <BrandSelect products={products} register={register}></BrandSelect>
                        <PriceRange value={value} setValue={setValue}></PriceRange>
                        <div>
                            <button className=' px-6 py-2 rounded-lg animation-hover' type="submit">Apply</button>
                            <button type="button" onClick={handleReset} className='mt-24 ml-5 px-6 py-2 rounded-lg animation-hover' value='Reset'>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterDrawer;