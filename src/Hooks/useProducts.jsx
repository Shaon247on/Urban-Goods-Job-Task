import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useProducts = (newData, value) => {
    const axios = useAxios();
    const { data: products = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['products', 'newData', 'value'],
        queryFn: async () => {
            const { data } = await axios.get('/api/products', {
                params: {
                    ...newData,
                    price: value.join(',')
                }
            });
            return data;
        }
    });
    return [products, refetch, loading];
};

export default useProducts;
