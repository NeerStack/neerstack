<template>
	<aside class="sidebar" :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="logo" v-if="is_expanded === false">
			<img :src="logoURL" alt="bigblog" />
        </div>
        <div class="mylogo" v-else>
          	<img :src="logo2" alt="blog"/>
        </div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons">keyboard_double_arrow_right</span>
			</button>
		</div>

		<h3>Menu</h3>
		<hr/>
		<div class="menu">
			<NuxtLink to="/admin/dashboard" class="button">
				<span class="material-icons">home</span>
				<span class="text">Home</span>
			</NuxtLink>
			<NuxtLink to="/admin/dashboard/createPost" class="button">
				<span class="material-icons">post_add</span>
				<span class="text">Create Post</span>
			</NuxtLink>
			<NuxtLink to="/admin/dashboard/listPosts" class="button">
				<span class="material-icons">article</span>
				<span class="text">Posts</span>
			</NuxtLink>
			<NuxtLink to="/admin/dashboard/drafts" class="button">
				<span class="material-icons"> drafts </span>
				<span class="text">Drafts</span>
			</NuxtLink>
			<NuxtLink to="/settings" class="button">
				<span class="material-icons">settings</span>
				<span class="text">Settings</span>
			</NuxtLink>
			<button @click="logout" class="button">
				<span class="material-icons">logout</span>
				<span class="text">Log Out</span>
			</button>
		</div>

		<div class="flex"></div>

		<!-- <div class="menu">
			<router-link to="/settings" class="button">
				<span class="material-icons">settings</span>
				<span class="text">Settings</span>
			</router-link>
		</div> -->
	</aside>
</template>

<script setup>
// import { ref } from 'vue'
import logoURL from '@/assets/smallLogo.png'
import logo2 from '@/assets/newLogo_light.png'
const is_expanded = ref(typeof window !=='undefined' ? sessionStorage.getItem("is_expanded") === "true" : false);
const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	sessionStorage.setItem("is_expanded", is_expanded.value)
}

const router = useRouter()

const logout =()=>{
	sessionStorage.removeItem('Token')
	sessionStorage.removeItem('User')
	router.push('/admin/login')
}
</script>

<style lang="scss" scoped>
aside.sidebar {
	display: flex;
	flex-direction: column;
	background-color: var(--dark);
	color: var(--light);
	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 170vh;
	padding: 1rem;
	transition: 0.2s ease-in-out;
    height: 100%;
    max-height: max-content;
	.flex {
		flex: 1 1 0%;
	}
	.logo {
		margin-bottom: 1rem;
		img {
			width: 5rem;
		}
	}
	.mylogo{
        margin-bottom: 1rem;
        img{
            display: block;
            width: 20rem;
			align-items: center;
            justify-content: center;
			margin-left: 20px;
            padding: 0;
        }
    }
	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;
		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;
		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}

			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(0.5rem);
				}
			}
		}
	}
	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}
	h3 {
		color: var(--grey);
		font-size: 2rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}
	.menu {
		margin: 0 -1rem;
		.button {
			display: flex;
			align-items: center;
			text-decoration: none;
			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;
            height: 100px;
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
			.text {
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
			&:hover {
				background-color: var(--dark-alt);
				.material-icons, .text {
					color: var(--primary);
				}
			}
			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);
				.material-icons, .text {
					color: var(--primary);
				}
			}
		}
	}
	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}
	&.is-expanded {
		width: var(--sidebar-width);
		.menu-toggle-wrap {
			top: -3rem;

			.menu-toggle {
				transform: rotate(-180deg);
			}
		}
		h3, .button .text {
			opacity: 1;
		}
		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}

		.footer {
			opacity: 0;
		}
	}
	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>
<style scoped>
	@media screen and (max-width: 991px) {
	aside.sidebar{
		min-height: 100%;

	}
	.button .material-icons{
		font-size: 10px;
	}
}
</style>
