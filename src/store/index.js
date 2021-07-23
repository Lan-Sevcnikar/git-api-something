import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      user: {},
      darkMode: false,
    }
  },
  getters: {
    currentUser: (state) => state.user,
    darkMode: (state) => state.darkMode,
  },
  mutations: {
    changeUser (state, user) {
      state.user = user;
    }
  }
})