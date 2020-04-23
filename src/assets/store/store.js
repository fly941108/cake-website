import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    numOfCake: 0,
    showLogin: false,
    userName: '',
    passward: '',
    tocken: ''
  },
  getters: {
    getNumOfCake (state) {
      return state.numOfCake
    },
    getUserName (state) {
      return state.userName
    },
    getShowLogin (state) {
      return state.showLogin
    },
    getTocken (state) {
      return state.tocken
    }
  },
  mutations: {
    addNumOfCake (state, num) {
      state.numOfCake = state.numOfCake + num
    },
    setLoginInfo (state, name, psd) {
      state.userName = name
      state.passward = psd
    },
    setShowLogin (state, e) {
      state.showLogin = e
    },
    setGetTocken (state, e) {
      state.tocken = e
    }
  },
  actions: {
    setAddNumOfCake ({commit, state}, num) {
      commit('addNumOfCake', num)
    },
    actionSetLoginInfo ({commit}, name, psd) {
      commit('setLoginInfo', name, psd)
    },
    actionSetShowLogin ({commit}, e) {
      commit('setShowLogin', e)
    },
    actionSetGetTocken ({commit}, e) {
      commit('setGetTocken', e)
    }
  }
})
export default store
