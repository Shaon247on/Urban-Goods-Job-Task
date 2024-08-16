import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useProducts from '../Hooks/useProducts';
import FilterDrawer from './FilterDrawer';

const SortAndFilter = () => {
    const [value, setValue] = useState([])
    const [products, refetch, loading] = useProducts()
    console.log(products);
    const {
        register,
        handleSubmit,
        reset
    } = useForm({})

    const onSubmit = (data) => {
        // onchange(data)
        // console.log(data,value);
    }

    const handleReset = () => {
        reset()
        // onchange({})
        setValue([19.99, 699.99])
        console.log(value);
    }
    return (
        <div>
            <form className="flex items-center justify-between" onSubmit={handleSubmit(onSubmit)}>
                <FilterDrawer setValue={setValue} value={value} products={products} register={register} handleReset={handleReset}></FilterDrawer>
                <input {...register('search')} placeholder="Search by name" className='border_style' />                
                <select {...register('sort')}>
                    <option value="createdAt">Sort by Date Added</option>
                    <option value="lowToHigh">Price: Low to High</option>
                    <option value="highToLow">Price: High to Low</option>
                </select>
                <button type="submit">Apply</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </form>
        </div >
    );
};

export default SortAndFilter;