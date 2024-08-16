import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useProducts from '../Hooks/useProducts';
import FilterDrawer from './FilterDrawer';

const SortAndFilter = ({ onChange }) => {

    const [value, setValue] = useState([])
    const [filters, setFilters] = useState({ search: '', category: '', brand: '', sort: 'createdAt' })
    const [products, refetch, loading] = useProducts(filters, value)
    // console.log(products);
    // console.log(products.slice(0,10));
    const {
        register,
        handleSubmit,
        reset
    } = useForm({})

    const onSubmit = (data) => {
        setFilters(data)
        onChange(data, value)
        refetch()
        console.log(products.slice(0, 10));
    }

    const handleReset = () => {
        reset()
        // onchange({})
        setValue([19.99, 699.99])
        console.log(value);
    }
    return (
        <div>
            <form className="flex gap-6 flex-col lg:flex-row items-start lg:items-center justify-between" onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-9 items-center justify-between mt-8'>

                    <div>
                        <FilterDrawer setValue={setValue} value={value} products={products} register={register} handleReset={handleReset}></FilterDrawer>
                    </div>

                    <input {...register('search')} placeholder="Search by name" className='w-[100px] md:w-[250px] lg:w-[350px] px-3 py-2 placeholder-[#F5AB41] focus:placeholder-transparent border-b-[#F5AB41] border-b focus:border-b-[#F5AB41] duration-150  focus:border-b-4 hover:border-b-[#F5AB41] hover:border-b-4 outline-none bg-transparent' />

                    <select {...register('sort')} className='select select-warning w-full max-w-[200px]'>
                        <option value="createdAt">Sort by Date Added</option>
                        <option value="lowToHigh">Price: Low to High</option>
                        <option value="highToLow">Price: High to Low</option>
                    </select>

                </div>
                <div className='flex items-center gap-4'>
                    <button className='px-4 py-2 rounded-lg animation-hover' type="submit">Apply</button>
                    <button className='px-4 py-2 rounded-lg animation-hover' type="button" onClick={handleReset}>Reset</button>
                </div>
            </form>
        </div >
    );
};

export default SortAndFilter;