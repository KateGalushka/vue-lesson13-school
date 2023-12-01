import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import HomeView from '../views/HomeView.vue'
import LoginPageView from '../views/LoginPageView.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
		meta: { requiresAuth: false }
	},
	{
		path: '/login',
		name: 'login',
		component: LoginPageView,
		meta: { requiresAuth: false }
	},
	{
		path: '/lessons/select',
		name: 'lessons',
		component: ()=> import('../views/SelectLessonsView.vue'),
		meta: { requiresAuth: true }
	},
	{
		path: '/lessons/:subjectIdList(\\d+)*',
		name: 'teachers',
		component: () => import('../views/SelectTeachersView.vue'),
		props: true,
		meta: { requiresAuth: true },
		beforeEnter(to){
			const subjectsFromStore = store.getters['subjects/getSubjectsList'];
			const arr = to.params.subjectIdList;
			if (arr.length){
				const subjectsExist = arr.every(item => {
					if (subjectsFromStore.find(subject=>subject.id == item)) return true;
					else return false});
				if (!subjectsExist) return { name: 'pageNotFound'};
			} else return {name: 'lessons'}
		}
	},
	{
		path: '/lessons/:planned(\\d+-\\d+)+',
		name: 'educationPlan',
		component: () => import('../views/EducationPlanView.vue'),
		props: true,
		meta: { requiresAuth: false },
		beforeEnter(to,from){
			if (from.name !== 'teachers') return { name:'pageNotFound'}
			if (!to.params.planned?.length) return {name: 'lessons'}
		}
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'pageNotFound',
		component: PageNotFound,
		meta: { requiresAuth: false }
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

router.beforeEach((to)=>{
	const isAuth = store.getters.getUserParams !== null;
	// console.log('login: ', store.getters.getUserParams);
	if (to.meta.requiresAuth && !isAuth){
		return {
			name: 'login',
			query: {redirect: to.fullPath}
		}
	}
})

export default router
