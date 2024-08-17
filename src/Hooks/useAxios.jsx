import axios from 'axios';

const axiosURL= axios.create({
    baseURL: "https://urban-goods-server.vercel.app"
})
const useAxios = () => {
    return axiosURL
};

export default useAxios;