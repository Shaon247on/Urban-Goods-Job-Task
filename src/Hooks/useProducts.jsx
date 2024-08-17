import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';
import useProvider from './useProvider';

const useProducts = (newData, value, page) => {
    // console.log(newData);
    const {currentPage,setTotalPage} = useProvider()
    
    const axios = useAxios();    
    const { data: products = [], refetch, isPending: loading } = useQuery({
        queryKey: [ 'newData', 'value',currentPage],
        queryFn: async () => {
            const { data } = await axios.get('/api/products', {
                params: {
                    ...newData,
                    price: value.join(','),                    
                    page: currentPage,                    
                    limit: 9
                }
            });            
            setTotalPage(data.totalPages)
            // console.log(data.totalPages);
            return data.result;
        }
    });   
    return [products, refetch, loading];
};

export default useProducts;
