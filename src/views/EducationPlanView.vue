<template>
	<h1>Навчальний план</h1>
	<ol>
		<li v-for="(item, index) in listWithNames" :key="index">
			<span> {{ item.subjName }} </span> - <span> {{ item.teacherName }} </span>
			<button @click="onDelete(index)">Delete</button>
		</li>
	</ol>
	
</template>

<script>
import { mapGetters } from 'vuex';

	export default {
		name: 'EducationPlanView',
		props: {
			planned: {
				type: Array,
				required: true
			},
		},
		data() {
			return {
				educationPlan: []
			}
		},
		computed: {
			...mapGetters('subjects', ['getSubjectById']),
			...mapGetters('teachers', ['getTeacherById']),

			listWithNames(){
				this.planned.forEach(item=>{
					const subjectId = item.split('-')[0];
					const subjName = this.getSubjectById(subjectId).title;
					const teacherId = item.split('-')[1];
					const teacherName =  this.getTeacherById(teacherId).name;
					item = {subjName,teacherName};
					this.educationPlan.push(item);
				})
				return this.educationPlan;
			}
		},
		methods: {
			onDelete(index) {
				this.educationPlan.splice(index,1);
				if (this.educationPlan.length == 0){
					this.$router.push({
						name: 'lessons'
					})
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
ol{
	max-width: 350px;
	margin: 0 auto;
	li{
		// text-align: left;
		margin-bottom: 5px;
		display: flex;
		justify-content: space-between;
	}
}

</style>