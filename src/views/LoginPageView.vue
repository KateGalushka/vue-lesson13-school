<template>
	<div class="login-form">
		<label>
			Введіть логін:
			<input v-model.lazy="userLogin" type="text">
		</label>
		<label>
			Введіть пароль:
			<input v-model.lazy="userPassword" type="text">
		</label>
		<button @click="onLogin">Увійти</button>

	</div>
</template>

<script>
import { mapActions } from 'vuex';

	export default {
		name: 'LoginPageView',
		data() {
			return {
				userLoginValue: null,
				userPasswordValue: null
			}
		},
		computed: {
			userLogin: {
				get(){
					return this.userLoginValue;
				},
				set(val){
					this.updateUserLogin(val)
				}
			},
			userPassword: {
				get(){
					return this.userPasswordValue;
				},
				set(val){
					this.updateUserPassword(val)
				}
			},
		},
		methods: {
			...mapActions(['updateUserLogin', 'updateUserPassword']),

			onLogin() {
				// this.updateUserLogin(this.userLogin);
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