import { useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import Card from '../../Components/Card';
import { Link } from 'react-router-dom';
import SortAndFilter from '../../Components/SortAndFilter';
import Pagination from '../../Components/Pagination';
import useProvider from '../../Hooks/useProvider';

const Products = () => {
    const { setCurrentPage } = useProvider()
    const [page, setPage] = useState(null)

    const [products, refetch, loading] = useProducts(page)
    // console.log( products);

    // console.log(products);
    const handleFilter = (e) => {
    }

    const handlePageChange = (page) => {
        setCurrentPage(page)
        setCurrentPage(page)
        refetch()
    }

    return (
        <div className='mx-2 md:mx-6 lg:mx-10 mb-10'>
            <div className='text-center'>
                <h1 className='text-2xl md:text-5xl font-semibold mb-3 text-[#419577]'>Product Showcase</h1>
                <p className='text-lg font-medium text-gray-600/65'>Discover our top-selling items, loved by customers for their quality and style. <br /> Find the best of the best, all in one place.</p>
            </div>
            <div>


                {/*------------------- Sort Section ------------------- */}
                <SortAndFilter onChange={handleFilter} />

            </div>
            {
                loading ?
                    <div className=' text-center'>
                        <span className="loading loading-spinner text-warning text-4xl"></span>
                    </div> :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
                        {

                            products.length > 0?
                                <>
                                    {
                                        products.slice(0, 6).map(product => <Card key={product._id} product={product}></Card>)
                                    }
                                </> :
                                <div className='flex flex-col gap-5 items-center justify-center col-span-3'>
                                    <img src="https://i.pinimg.com/564x/82/fd/52/82fd524844113645197c2417365fd2d5.jpg" alt="minion" className='rounded-xl' />
                                    <p className='text-4xl font-bold text-[#419577]'>No Product found</p>
                                </div>
                        }
                    </div>
            }

            <div className='text-center mt-6'>
                {/* <Link to='/products'><button className="animation-hover btn">View More</button></Link> */}
                <Pagination onPageChange={handlePageChange}></Pagination>
            </div>
        </div>
    );
};

export default Products;