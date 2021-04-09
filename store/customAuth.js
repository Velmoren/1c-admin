export const state = () => ({
  user: {
    login: '',
    password: '',
    userID: '',
    isAuth: false,
  }
})

export const mutations = {
  setUserLogin(state, val) {
    state.user.login = val
  },
  setUserPassword(state, val) {
    state.user.password = val
  },
  setAuth(state, payload) {
    state.user = payload
    state.user.userID = payload.userID
  }
}

export const actions = {
  async setLogin({commit}, pay) {
    const user = this.getters['customAuth/getUser']
    return await this.$axios.$get(`http://web1c.standart.by/std_UT/hs/api/ClientLogin/${user.login}/${user.password}`, {
      auth: {
        username: 'hs',
        password: '1qasw23ed!'
      }
    })
  },
  setAuth({commit}, payload) {
    commit('setAuth', payload)
  },
  setUserLogin({commit}, val) {
    commit('setUserLogin', val)
  },
  setUserPassword({commit}, val) {
    commit('setUserPassword', val)
  }
}

export const getters = {
  getUser(state) {
    return state.user
  },
  getUserLogin(state) {
    return state.user.login
  },
  getUserPassword(state) {
    return state.user.password
  },
  getIsAuth(state) {
    return state.user.isAuth
  }
}

