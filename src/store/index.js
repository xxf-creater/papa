import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aData:'',
    bData:'',
    isLogin: false,
  },
  getters: {
  },
  mutations: {
    changeAData(state,payload){
      state.aData = payload.value
    },
    changeBData(state,payload){
      state.bData = payload.value
    } ,
    changeLogin(state,payload){
      state.isLogin = payload.value
    } 
  },
  actions: {

  },
  modules: {
  }
})
