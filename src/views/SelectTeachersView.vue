<template>
	<h1>Крок 2: вибір вчителів</h1>
	<div v-if="subjectIdList.length !==0" class="selector-container">
		<div v-for="(subjId,index) in subjectIdList" :key="subjId">
			<label>
				{{ getSubjectById(subjId).title }}
				<select v-model="selectedSubjectAndTeacher[index]">
					<option v-for="teacher in getTeachersBySubjectId(subjId)" :key="teacher.id" :value="[subjId+'-'+teacher.id]">
						{{ teacher.name }}
					</option>
				</select>
			</label>
		</div>
		<button :disabled="isDisabled" @click="goToEducationPlan">Розпочати навчання</button>
	</div>

	<div v-else>Redirecting...</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'SelectTeachersView',
	
	props: {
		subjectIdList: {
			type: Array,
			default:()=>([])
		},
	},
	data() {
		return {
			selectedSubjectAndTeacher: [],
		}
	},
	computed: {
		...mapGetters('subjects', ['getSubjectById']),
		...mapGetters('teachers', ['getTeachersBySubjectId']),

		isDisabled() {
			return !this.selectedSubjectAndTeacher.length;
		}
	},
	methods: {
		goToEducationPlan(){
			if (this.selectedSubjectAndTeacher.length){
				this.$router.push({
					name: 'educationPlan',
					params: {
						planned: this.selectedSubjectAndTeacher
					}
				})
			}
		}
	},
	
}
</script>
<style lang="scss" scoped>
.selector-container{
	display: flex;
	flex-direction: column;
	max-width: 350px;
	margin: 0 auto 30px;
	// align-items: center;
	label{
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}
}
</style>