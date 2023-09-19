import axiosConfig from '../utils/AxiosConfig'

export class AxiosService{

    async fetchCryptoData(page=1){
        const result = await axiosConfig.get(`/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=${page}&sparkline=false&locale=en`);
        return result.data;
    }

    
}