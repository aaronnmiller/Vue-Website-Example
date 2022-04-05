import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userDetails: {},
    apiUrl: "https://dummyapi.io/data/v1/user/"
  },
  mutations: {
    setUserDetails(state, payload) {
      state.userDetails = payload;
    }
  },
  actions: {
    async getDetails({state, commit}, id) {
      try {
        let url = state.apiUrl + id;
        const response = await axios.get(url, {
          headers: {
            'app-id' : '62168790c810c9a5f5190062',
          }
        });
        commit('setUserDetails', response.data);
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
