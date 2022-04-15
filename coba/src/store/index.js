import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    berita : [],
  },
  getters: {
    
  },
  mutations: {
    setBerita(state, payload){
      state.berita=payload
    }
  },
  actions: {
    fetchBerita(store) {
      axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=c6b5c48fa13a46c5b1897edb5c3222b4')
      .then(res => {
        store.commit('setBerita', res.data.articles)
      })
    }
  },
  modules: {
  },
});