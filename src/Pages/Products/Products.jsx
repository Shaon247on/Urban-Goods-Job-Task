import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Card from '../../Components/Banner/Card';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products] = useProducts()
    console.log(products);
    return (
        <div className='mx-10'>
            <div className='text-center'>
                <h1 className='text-2xl md:text-5xl font-semibold mb-3 text-[#419577]'>Product Showcase</h1>
                <p className='text-lg font-medium text-gray-600/65'>Discover our top products across various categories. Browse, compare, and <br />find the perfect fit for your needs, all with detailed info and easy navigation.</p>
            </div>
            <div>
                
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
                {
                    products.slice(0,6).map(product=><Card key={product.id} product={product}></Card>)
                }
            </div>
            <div className='text-center mt-6'>
                <Link to='/products'><button className="animation-hover btn">View More</button></Link>
            </div>
        </div>
    );
};

export default Products;