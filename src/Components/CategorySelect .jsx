import React from 'react';

const CategorySelect = ({ register }) => { 

  return (
    <>
    <label className='text-xl font-semibold mb-3 text-[#419577]'>Category</label>
    <select {...register('category')} className='select select-warning w-full max-w-xs'>
      <option value="">All Categories</option>
      <option value="Electronics">Electronics</option>
      <option value="Sportswear">Sportswear</option>
      <option value="Accessories">Accessories</option>
      <option value="Kitchen Appliances">Kitchen Appliances</option>
      <option value="Furniture">Furniture</option>
      <option value="Personal Care">Personal Care</option>
      <option value="Outdoors">Outdoors</option>
      <option value="Home Appliances">Home Appliances</option>
      <option value="Home Decor">Home Decor</option>
      
    </select>
    </>
  );
};

export default CategorySelect;
