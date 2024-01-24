import api from '@/store/api'
import PRODUCT_INTERFACE from '../interfaces/PRODUCT_INTERFACE'

const ProductState = {
    state: {
        allProducts: [] as Array<PRODUCT_INTERFACE>
    },
    getters: {
    },
    mutations: {
        GET_PRODUCTS(state: any, payload: object) {
            state.allProducts = payload
        },
    },
    actions: {
        async fetchAllProducts({ commit }: any) {
            try {
                const response = await api.get('/product')
                commit('GET_PRODUCTS', response.data)
            } catch (error) {
                console.log(error);
            }
        },
    }
}

export default ProductState