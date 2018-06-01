import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    increment: ({ commit }) => {
        commit('increment');
    },
    decrement: ({ commit }) => {
        commit('decrement');
    }
}

const mutations = {
    increment(state) {
        state.count++
    },
    decrement(state) {
        state.count--
    }
}

const state = {
    count: 10
}

const getters = {
    count(state) {
        return state.count;
    }

}

export default new Vuex.Store({
    getters,
    state,
    actions,
    mutations
})