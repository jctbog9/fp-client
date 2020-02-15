import {
  fetchBlogPosts
} from '@/utils/api'

const state = () => {
  return {
    pageOfBlogPosts: [],
    numberOfPages: 0,
    latestPosts: []
  }
}

const mutations = {
  setInitialPosts(state, posts) {
    state.latestPosts = posts
  }
}

const actions = {
  async fetchBlogPosts({ commit }) {
    const posts = await fetchBlogPosts()
    commit('setInitialPosts', posts)
  }
}

const getters = {
  latestPosts(state) {
    return state.latestPosts
  }
}

export default { actions, mutations, state, getters }