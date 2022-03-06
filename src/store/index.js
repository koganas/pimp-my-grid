import { gridSettings } from '@/constants/gridSettings.js'
import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      gridSettings,
      alert: {
        status: '',
        show: false
      }
    }
  },
  mutations: {
    SET_GRID(state, payload) {
      state.gridSettings = payload
    },

    SHOW_ALERT(state, payload) {
      state.alert = {
        status: payload.status,
        show: payload.show
      }
    },

    HIDE_ALERT(state) {
      state.alert = {
        status: '',
        show: false
      }
    }
  },
  actions: {
    updateStore({ commit }, data) {
      commit(
        'SHOW_ALERT',
        {
          status: `The location has been ${data.id ? 'updated' : 'added'
            }.`,
          show: true
        },
        { root: true }
      )

      //let list = [data, state.gridSettings]
/*       if (data.id) {
        const index = state.gridSettings.findIndex(
          (office) => office.id === data.id
        )
        list = JSON.parse(JSON.stringify(state.gridSettings))
        list[index] = data
      } else {
        data.id = Math.random().toString(36).substr(2, 9)
        list = [data, ...state.gridSettings]
      } */
      commit('SET_GRID', data)
    },

    deleteStore({ state, commit }, officeId) {
      const updatedList = state.gridSettings.filter(
        (office) => office.id !== officeId
      )
      commit('SET_GRID', updatedList)

      commit(
        'SHOW_ALERT',
        {
          status: 'The location has been removed.',
          show: true
        },
        { root: true }
      )
    }
  }
})

export const state = () => ({
  gridSettings,
  alert: {
    status: '',
    show: false
  }
})

export const actions = {
  updateStore({ state, commit }, data) {
    commit(
      'SHOW_ALERT',
      {
        status: `The location has been ${data.id ? 'updated' : 'added'
          }.`,
        show: true
      },
      { root: true }
    )
    let list = []
    if (data.id) {
      const index = state.gridSettings.findIndex(
        (office) => office.id === data.id
      )
      list = JSON.parse(JSON.stringify(state.gridSettings))
      list[index] = data
    } else {
      data.id = Math.random().toString(36).substr(2, 9)
      list = [data, ...state.gridSettings]
    }
    commit('SET_GRID', list)
  },

  deleteStore({ state, commit }, officeId) {
    const updatedList = state.gridSettings.filter(
      (office) => office.id !== officeId
    )
    commit('SET_GRID', updatedList)

    commit(
      'SHOW_ALERT',
      {
        status: 'The location has been removed.',
        show: true
      },
      { root: true }
    )
  }
}