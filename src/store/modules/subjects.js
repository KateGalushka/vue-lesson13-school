import { subjects } from '../data.js'

export default({
	namespaced: true,
	state: {
		subjectsList: subjects,
		
	},
	getters: {
		getSubjectsList: ({ subjectsList }) => subjectsList,
		getSubjectById:(state) => (subjectId) => state.subjectsList.find(subject=>subject.id == subjectId),
		

	},
	mutations: {},
	actions: {},
	modules: {},
})