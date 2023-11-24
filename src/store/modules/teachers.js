import { teachers } from '../data.js'

export default ({
	namespaced: true,
	state: {
		teachersList: teachers
	},
	getters: {
		getTeachersList: ({ teachersList }) => teachersList,
		getTeacherById: (state)=>(teacherId)=> state.teachersList.find(teacher=> teacher.id == teacherId),
		getTeachersBySubjectId:(state)=>(subjectId)=>{
			return [...state.teachersList.filter(teacher => teacher.subjectId == subjectId)]
		}

	},
	mutations: {},
	actions: {},
	modules: {},
})
