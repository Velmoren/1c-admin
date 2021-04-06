export const state = () => ({
  user: {
    login: '',
    password: ''
  },
  isAuth: false,
  isAuthLoading: false
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  setUserLogin(state, val) {
    state.user.login = val
  },
  setUserPassword(state, val) {
    state.user.password = val
  }
}

export const actions = {
  async setLogin({commit}, pay) {
    const user = this.getters['auth/getUser']
    await this.$axios.$get(`http://web1c.standart.by/std_UT/hs/api/ClientLogin/${user.login}/${user.password}`, {
      auth: {
        username: 'hs',
        password: '1qasw23ed!'
      }
    })
  },
  setUserLogin({commit}, val) {
    commit('setUserLogin', val)
  },
  setUserPassword({commit}, val) {
    commit('setUserPassword', val)
  }
}

export const getters = {
  getUserLogin(state) {
    return state.user.login
  },
  getUserPassword(state) {
    return state.user.password
  },
  getIsAuth(state) {
    return state.isAuth
  },
  getIsAuthLoading(state) {
    return state.isAuthLoading
  }
}

