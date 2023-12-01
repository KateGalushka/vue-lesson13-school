<template>
	<span v-if="getUserParams"> {{ getUserParams.login }}</span>
	<router-link v-else :to="{ name: 'login' }">ВХІД</router-link> / 
	<button @click="onLogout">Вихід</button>
	
</template>

<script>
import { mapGetters,mapActions } from 'vuex';

	export default {
		name: 'LoginExitButtons',

		computed: {
			...mapGetters(['getUserParams']) 
		},
		methods: {
			...mapActions(['onExit']),
			onLogout(){
				this.onExit();
				this.$router.push({
					name: 'home'
				});
			}

		},
	}
</script>

<style lang="scss" scoped>
span, a, button{
	color: #000;
	font-size: 16px;
	font-weight: 600;
	font-family: inherit;
	padding: 7px 15px;
	margin: 0 15px;
	text-decoration: none;
	background-color: lightgreen;
	border: 1px solid green;
	border-radius: 7px;
	cursor: pointer;
	&:hover{
		box-shadow: 7px 5px 5px green;
	};
}

</style>