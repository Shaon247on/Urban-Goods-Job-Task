import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Card from '../../Components/Banner/Card';

const Products = () => {
    const [products] = useProducts()
    console.log(products);
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-2xl font-semibold'>Product Showcase</h1>
                <p className='text-lg font-medium'>Discover our top products across various categories. Browse, compare, and <br />find the perfect fit for your needs, all with detailed info and easy navigation.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    products.slice(0,20).map(product=><Card key={product.id} product={product}></Card>)
                }
            </div>
        </div>
    );
};

export default Products;