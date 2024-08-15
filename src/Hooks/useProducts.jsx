import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useProducts = () => {
    const axios = useAxios()
    const {data: products=[], refetch, isPending: loading} =useQuery({
        queryKey: ['products'],
        queryFn: async ()=>{
            const {data}= await axios.get(`/api/products`)
            return data
        }
    })
    return [products, refetch, loading]
};

export default useProducts;


  
