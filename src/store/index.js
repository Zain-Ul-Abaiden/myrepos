import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: []
  },
  mutations: {
    SET_USER(state,payload){
      state.user = payload;
    }
  },
  actions: {
    async registerUser({commit}){
      const response = await axios.post();
      commit('SET_USER', response);
    }
  },
  getters: {
    getUser(state){
      return state.user;
    }
  }
})
