import api from '@/store/api'
import PRODUCT_INTERFACE from '../interfaces/PRODUCT_INTERFACE'

const CommentsState = {
    state: {
        allProducts: [] as Array<PRODUCT_INTERFACE>
    },
    getters: {
    },
    mutations: {
        GET_PRODUCTS(state: any, payload: object) {
            state.allProducts = payload
        },
        GET_ONE_PRODUCT(state: any, payload: any) {
            state.allProducts.forEach((product: any) => {
                if (product.id === payload.id) {
                    product = { ...payload }
                }
            });
        },
        // CREATE_NOTE(state: any, payload: any) {
        //     payload.created = new Date();
        //     payload.created = payload.created.toLocaleString("ru-RU")
        //     state.notes.push(payload)
        // },
        // DELETE_NOTE(state: any, payload: any) {
        //     state.notes = state.notes.filter((note: any) => {
        //         if (note.id != payload.id) {
        //             return note
        //         }
        //     });
        // },
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
        async getOneProduct({ commit }: any, product: any) {
            try {
                const response = await api.get(`product/${product.id}`)
                commit('GET_ONE_PRODUCT', response.data)
            } catch (error) {
                console.log(error);
            }
        }
        // async updateNote({ commit }: any, noteData: any) {
        //     try {
        //         await api.put(`/notes/${noteData.id}/`, noteData)
        //         commit('UPDATE_NOTES', noteData)
        //     } catch (error) {
        //         console.log(error);
        //         return error
        //     }
        // },
        // async createNote({ commit }: any, noteData: any) {
        //     try {
        //         await api.post(`/notes/`, noteData)
        //         commit('CREATE_NOTE', noteData)
        //     } catch (error) {
        //         console.log(error);
        //         return error
        //     }
        // },
        // async deleteNote({ commit }: any, noteData: any) {
        //     try {
        //         await api.delete(`/notes/${noteData.id}/`)
        //         commit('DELETE_NOTE', noteData)
        //     } catch (error) {
        //         console.log(error);
        //         return error
        //     }
        // }
    }
}

export default CommentsState