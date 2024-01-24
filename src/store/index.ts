import { createStore } from 'vuex'
import ProductState from "./States/ProductState"
import BasketState from './States/BasketState'
import CommentsState from './States/CommentsState'
import UserState from './States/UserState'
import OrderState from './States/OrderState'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ProductState: ProductState,
    BasketState: BasketState,
    CommentsState: CommentsState,
    UserState: UserState,
    OrderState: OrderState, 
  }
})
