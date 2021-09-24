import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { login } from '@/api/me'

export const store = createStore({
    plugins: [createPersistedState()],
    state: {
        account: '',
        avatar: '',
        token: ''
    },
    mutations: {
        setUser(state, user) {
            state.account = user.account
            state.avatar = user.avatar
            state.token = user.token
        }
    },
    actions: {
        login({ commit }, params) {
            return new Promise((resolve, reject) => {
                console.log('login action: ', params)
                login(params)
                    .then(res => {
                        commit('setUser', res.data)
                        resolve()
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        logout({ commit }) {
            commit('setUser', {
                account: '',
                avatar: '',
                token: ''
            })
        }
    },
    modules: {}
})
