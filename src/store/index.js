import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "",
    name: "",
    userName: "",
    postTypes: {}
  },
  getters: {
    getToken: state => {
      return state.token;
    },
    getName: state => {
      return state.name;
    },
    getUserName: state => {
      return state.userName;
    },
    getPostTypes: state => {
      return state.postTypes;
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setName (state, name) {
      state.name = name
    },
    setUserName (state, userName) {
      state.userName = userName
    },    
    setPostTypes (state, postTypes) {
      state.postTypes = postTypes
    }
  }
})