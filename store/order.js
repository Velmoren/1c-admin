export const state = () => ({
  order: {
    headers: [
      { key: 'Doc_Number', label: 'Номер' },
      { key: 'Doc_Date', label: 'Дата' },
      { key: 'Sum', label: 'Стоимость' },
      { key: 'Sum_NDS', label: 'НДС' },
      { key: 'Sum_total', label: 'ИТОГО' },
      { key: 'delivery', label: 'Доставка' },
      { key: 'details', label: 'Детали' },
      { key: 'print', label: 'Печать' },
      { key: 'Status', label: 'Статус' },
      { key: 'LoadDate', label: 'Дата отгрузки' },
    ],
    documents: [],
    currentPage: 1,
    perPage
  }
})

export const mutations = {
  setDocuments(state, data) {
    state.order.documents = data
  },
}

export const actions = {
  async setOrderDocuments({commit}, pay) {
    const user = this.getters['customAuth/getUser']
    return await this.$axios.$get(`http://web1c.standart.by/std_UT/hs/api/GetOrdersByClient/${user.userID}`, {
      auth: {
        username: 'hs',
        password: '1qasw23ed!'
      }
    })
  },
  setDocuments({commit}, data) {
    commit('setDocuments', data)
  },
}

export const getters = {
  getDocuments(state) {
    return state.order.documents
  },
  getHeaders(state) {
    return state.order.headers
  }
}
