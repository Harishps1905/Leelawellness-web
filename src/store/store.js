import { createStore } from 'vuex';
import { localStoragePlugin } from '@/store/localstorage';

export default createStore({
  state: {
   auth:false,
  },
  mutations: {
    SET_SELECTEDAUTH(state, data) {
      state.auth = data;
    },
  },
  getters: {
   
  },
  actions: {

  },
  plugins: [localStoragePlugin],
});
