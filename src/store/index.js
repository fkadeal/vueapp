import { createStore } from 'vuex'
import { userModule } from './User';

export default createStore({
  state: {
    user:null
  },

  //mutations are function that effect the STATE
  mutations: {},

  //Actions are functions that you call throughout your application that call mutations
  actions: {},

  modules: {
    User: userModule    
        }

})
