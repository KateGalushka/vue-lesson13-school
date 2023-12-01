<template>
	<div class="login-form">
		<label>
			Введіть логін:
			<input v-model="user.login" type="text">
		</label>
		<label>
			Введіть пароль:
			<input v-model="user.password" type="text">
		</label>
		<button :disabled="isBtnDisabled" @click="onLogin">Увійти</button>

	</div>
</template>

<script>
import { mapActions } from 'vuex';

	export default {
		name: 'LoginPageView',
		data() {
			return {
				user:{}
			}
		},
		computed: {
			isBtnDisabled(){
				return !this.user.login || !this.user.password;
			},
		},
		
		watch: {
			user: {
				handler(newVal) {
					this.updateUserParams(newVal)
				},
				deep:true
			}
		},
		methods: {
			...mapActions(['updateUserParams']),

			onLogin() {
				this.updateUserParams(this.user);
				if (this.$route.query.redirect){
					this.$router.push({
						path: this.$route.query.redirect,
					})
				} else this.$router.push({ path: '/'})
				
			}
		},
	}
</script>

<style lang="scss" scoped>
.login-form{
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	max-width: 300px;
	margin: 20px auto;
	gap: 10px;
}

</style>