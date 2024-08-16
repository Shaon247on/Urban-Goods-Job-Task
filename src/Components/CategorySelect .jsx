import React from 'react';

const CategorySelect = ({ products, register }) => {
  // Extract unique categories
  const uniqueCategories = [...new Set(products.map(product => product.category))]

  return (
    <>
    <label className='text-xl font-semibold mb-3'>Category</label>
    <select {...register('category')}>
      <option value="">All Categories</option>
      {uniqueCategories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
    </>
  );
};

export default CategorySelect;
