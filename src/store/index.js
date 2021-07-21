import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      user: {},
    }
  },
  getters: {
    currentUser: (state) => state.user,
  },
  mutations: {
    changeUser (state, user) {
      state.user = user;
    }
  }
})