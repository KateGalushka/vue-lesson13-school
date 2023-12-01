import { createStore } from 'vuex'
import subjects from './modules/subjects'
import teachers from './modules/teachers'

export default createStore({
    state: {
		userParams: null
	 },
    getters: {
		 getUserParams: ({ userParams }) => userParams
	 },
    mutations: {
		 updateUserParams(state, user){
			 state.userParams = user
		 },
		 exit(state){
			state.userParams = null;
		 }
	 },
    actions: {
		 updateUserParams({commit}, user){
			 commit('updateUserParams', user)
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
