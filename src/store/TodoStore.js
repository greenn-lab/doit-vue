import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todo: []
  },
  getters: {
    allTodo(state) {
      return state.todo
    },
    completedTodo(state) {
      return state.todo.filter(todo => todo.completed)
    }
  },
  mutations: {
    addTodo(state, payload) {
      let todo = {
        text: payload,
        completed: false
      };

      state.todo.push(todo)

      localStorage.setItem(payload, JSON.stringify(todo))
    },
    toggleTodo(state, payload) {
      const todo = state.todo[payload]

      todo.completed = !todo.completed
      localStorage.setItem(todo.text, JSON.stringify(todo))
    },
    removeTodo(state, payload) {
      const todo = state.todo.splice(payload, 1)
      localStorage.removeItem(todo[0].text)
    },
    clearAll(state) {
      state.todo
        .splice(0, state.todo.length)
        .forEach(todo => localStorage.removeItem(todo.text))
    }
  },
  actions: {
    getAllTodo({state}) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        try {
          state.todo.push(JSON.parse(localStorage.getItem(key)))
        }
        catch (e) {
          // ignore
        }
      }
    }
  }
})
