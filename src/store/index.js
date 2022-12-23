import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: {
      titulo: '',
      estado: false,
      color:'blue'
    }
  },
  getters: {
  },
  mutations: {
    mostrarLoading(state, payload) {
      state.loading.titulo = payload.titulo
      state.loading.color = payload.color
      state.loading.estado = true
      setTimeout(() => {
        
      }, 10000);
    },

    ocultarLoading(state) {
      state.loading.estado = false
    }
  },
  actions: {
  },
  modules: {
  }
})
