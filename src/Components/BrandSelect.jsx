const BrandSelect = ({ products, register, reset }) => {
  const uniqueCategories = [...new Set(products.map(product => product.brand))]

  return (
    <>
      <label className='text-xl font-semibold mb-3 mt-8'>Brand</label>
      <select {...register('brand')}>
        <option value="">All Brands</option>
        {uniqueCategories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default BrandSelect;