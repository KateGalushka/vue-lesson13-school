<template>
	<h1>Крок 1: сторінка вибору уроків</h1>
	<h3>Виберіть уроки:</h3>
	<div class="selector-container">
		<label v-for="subject in getSubjectsList" :key="subject.id" >
			{{ subject.title }}
			<input v-model="selectedSubjects"  :value="subject.id" type="checkbox">
		</label>
	</div>

	<button :disabled="isDisabled" @click="goToChooseTeachers">Вибрати вчителів</button>

</template>

<script>
import { mapGetters } from 'vuex';


export default {
	name: 'SelectLessonsView',
	data() {
		return {
			selectedSubjects: [],
		}
	},

	computed: {
		...mapGetters('subjects', ['getSubjectsList']),

		isDisabled(){
			return !this.selectedSubjects.length;
		}
	},
	methods: {
		goToChooseTeachers() {
			if (this.selectedSubjects.length){
				this.$router.push({
					name: 'teachers',
					params: {
						subjectIdList: this.selectedSubjects
					}
				})
			}
		}
	}

}
</script>
<style lang="scss" scoped>
.selector-container{
	display: flex;
	flex-direction: column;
	max-width: 250px;
	margin: 0 auto 30px;
	// align-items: center;
	label{
		display: flex;
		justify-content: space-between;
	}
}
</style>