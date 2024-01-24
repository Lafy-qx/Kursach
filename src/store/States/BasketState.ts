import PRODUCT_INTERFACE from '../interfaces/PRODUCT_INTERFACE'

const BasketState = {
    state: {
        basket: JSON.parse(localStorage.getItem('basket') as string) || [] as Array<PRODUCT_INTERFACE>,
        // totalSummBasket: JSON.parse(localStorage.getItem('totalSumm') as string) || 0 as number
    },
    mutations: {
        ADD_TO_BASKET(state: any, product: PRODUCT_INTERFACE) {
            let notInBasket: boolean = true
            if (state.basket) {
                for (let i = 0; i < state.basket.length; i++) {
                    if (product.id === state.basket[i].id) {
                        notInBasket = false
                        break
                    }
                }
                if (notInBasket) {
                    state.basket.push(product)
                    // state.totalSummBasket += payload.price
                }
            } else {
                state.basket.push(product)
            };
            // localStorage.setItem('totalSumm', JSON.stringify(state.totalSummBasket))
        },
        DELETE_FORM_BASKET(state: any, payload: PRODUCT_INTERFACE) {
            state.basket = state.basket.filter((product: any) => {
                if (product.id != payload.id) {
                    return product
                }
            });
            // state.totalSummBasket -= payload.price
            // localStorage.setItem('totalSumm', JSON.stringify(state.totalSummBasket))
        },
        ADD_TO_LOCAL_STORAGE(state: any) {
            localStorage.setItem('basket', JSON.stringify(state.basket))
        },
        // INCREMENT_SUMM(state: any, payload: any) {
        //     state.totalSummBasket += payload.price
        // },
        // DECREMENT_SUMM(state: any, payload: any) {
        //     state.totalSummBasket -= payload.price
        // }
    },
    actions: {
        async addToBasket(state: any, product: PRODUCT_INTERFACE) {
            await state.commit('ADD_TO_BASKET', product)
            await state.commit('ADD_TO_LOCAL_STORAGE', product)
        },
        async deleteFromBasket(state: any, product: PRODUCT_INTERFACE) {
            await state.commit('DELETE_FORM_BASKET', product)
            await state.commit('ADD_TO_LOCAL_STORAGE', product)
        },
        async incrementPrice(state: any, product: PRODUCT_INTERFACE) {
            await state.commit('INCREMENT_SUMM', product)
        },
        async decrementPrice(state: any, product: PRODUCT_INTERFACE) {
            await state.commit('DECREMENT_SUMM', product)
        },
    }
}

export default BasketState