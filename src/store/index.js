import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "",
    name: "",
    username: "",
    postTypes: {},
    keepAliveIntervalID: ""
  },
  getters: {
    token: state => {
      return state.token;
    },
    name: state => {
      return state.name;
    },
    username: state => {
      return state.username;
    },
    postTypes: state => {
      return state.postTypes;
    },
    keepAliveIntervalID: state => {
      return state.keepAliveIntervalID;
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setName (state, name) {
      state.name = name
    },
    setUsername (state, username) {
      state.username = username
    },    
    setPostTypes (state, postTypes) {
      state.postTypes = postTypes
    },
    setKeepAliveIntervalID (state, keepAliveIntervalID) {
      state.keepAliveIntervalID = keepAliveIntervalID
    }
  }
})