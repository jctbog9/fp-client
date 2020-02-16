import {
  fetchBlogPosts
} from '@/utils/api'

const state = () => {
  return {
    isLoggedIn: false
  }
}

const mutations = {
  login(state) {
    state.isLoggedIn = true
  },
  logout(state) {
    state.isLoggedIn = false
  }
}

const actions = {
  loginOrLogout({ state, commit }) {
    state.isLoggedIn ? commit('logout') : commit('login')
  }
}

const getters = {
  isLoggedIn(state) {
    return state.isLoggedIn
  }
}

export default { actions, mutations, state, getters }