import { createStore } from 'vuex';
import { localStoragePlugin } from '@/store/localstorage';

export default createStore({
  state: {
    auth: false,
    cartproduct: [],
    ProdIncrement: 0,
    ProdDecrement: 0,
  },
  mutations: {
    SET_SELECTEDAUTH(state, data) {
      state.auth = data;
    },
    ADD_TO_CART(state, product) {
      state.cartproduct.push(product);
    },
    incrementProduct(state, data) {
      state.ProdIncrement = data;
    },
    decrementProduct(state, data) {
      state.ProdDecrement = data;
    }
  },
  getters: {
    isProductInCart: (state) => (productId) => {
      return state.cartproduct.some(cartProduct => cartProduct.id === productId);
    },
    getProductById: (state) => (productId) => {
      // Fetch the product by ID, you might want to extend this logic
      return state.cartproduct.find(product => product.id === productId);
    }
  },
  actions: {
    logout({ commit }) {
      commit('SET_SELECTEDAUTH', false);
    },
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    }
  },
  plugins: [localStoragePlugin],
});
