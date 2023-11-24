import { createStore } from 'vuex'
import subjects from './modules/subjects'
import teachers from './modules/teachers'

export default createStore({
    state: {
		userLogin: null,
		userPassword: null
		
	 },
    getters: {
		 getUserLogin: ({ userLogin }) => userLogin

	 },
    mutations: {
		 updateUserLogin(state, val){
			state.userLogin = val
		 },
		 updateUserPassword(state, val){
			state.userPassword = val
		 },
		 exit(state){
			state.userLogin = null;
		 }
	 },
    actions: {
		 updateUserLogin({commit}, val){
			 commit('updateUserLogin', val)
		 },
		 updateUserPassword({ commit }, val){
			 commit('updateUserPassword', val)
		 },
		 onExit({ commit }){
			commit('exit')
		 }
	 },
    modules: {
		subjects,
		teachers
	 },
})
