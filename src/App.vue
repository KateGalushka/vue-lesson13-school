<template>
	<div class="wrapper">
		<header>
			<nav>
				<router-link :to="{ name: 'home' }">Головна</router-link> |
				<router-link :to="{ name: 'lessons' }">Уроки</router-link> |
				<router-link :to="{name: 'teachers'}">Вчителі</router-link>
			</nav>
			<div class="login-buttons">
				<login-exit-buttons />
			</div>
		</header>

		<router-view />
	</div>
</template>

<script>
import LoginExitButtons from './components/LoginExitButtons.vue';
export default {
	name: "App",
	components: {
		LoginExitButtons
	},
};
</script>


<style lang="scss">
#app
{
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav
{
	a
	{
		font-weight: bold;
		font-size: 16px;
		color: #2c3e50;
		text-decoration: none;

		&.router-link-exact-active
		{
			color: #42b983;
		}
	}
}
.wrapper{
	max-width: 75vw;
	margin: 0 auto;
}

header
{
	display: flex;
	padding: 30px;
	justify-content: space-between;
	align-items: center;
}</style>
