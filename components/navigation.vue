<template>
  <div class="navigation">
    <nav>
        <div class="logo">
            <NuxtLink to="/">
                <span v-if="Setting.color === 'light'">
                <img :src="logoLight" alt="logo">
                </span>
                <span v-if="Setting.color === 'dark'">
                    <img :src="logoDark" alt="logo">
                </span>
            </NuxtLink>
            
        </div>
      <div class="links">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/pricing">Pricing</NuxtLink>
        <NuxtLink to="/contact-us">Contact</NuxtLink>
        <button @click="toggle()">
          <span v-if="Setting.color === 'light'">
           <fa6-solid-moon/>
          </span>
          <span v-if="Setting.color === 'dark'">
            <fa6-solid-sun/>
        
        </span>
        </button>
      </div>
    </nav>
  </div>
</template>
<script setup>
import Fa6SolidSun from '~icons/fa6-solid/sun'
import Fa6SolidMoon from '~icons/fa6-solid/moon'
import { setColor } from "@/store/color";
import logoDark from "@/assets/logo_dark.png";
import logoLight from "@/assets/logo_light.png"
  const Setting = setColor();

  onMounted(()=>{
    set(Setting.color);
  })

  const set = (newTheme) => {
    useColorMode().preference = newTheme;
  };
  const toggle = () => {
    Setting.toggleColor();
    set(Setting.color);
  };
</script>

<style scoped>
  .navigation {
    width: 99%;
    border-bottom: 1px solid #c55555;
    position: relative;
    margin-bottom: 70px;
    background: var(--light);
    clear: both;
    top: 0%;
    margin-top: 0;
    padding-top: 0;
  }
  .logo{
    display: inline-flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 2px;
    width: 200px;
    align-items: flex-start;
    left: 0;
  }
  .logo img{
    position: fixed;
    width: 200px;
    top: 0;
    display: inline-flex;
    align-items: flex-start;
    left: 0;
    margin-left: 0;
    padding: 3px;
  }
  @media (max-width: 720px) {
    .logo img{
      width: 170px;
      padding: 5px;
    }
  }
  @media (max-width: 520px) {
    .logo img{
      width: 130px;
      padding: 5px;
    }
    nav .links a{
      width: 20%;
      font-size: x-small;
    }
    nav .links button{
      font-size: x-small;
      top: 0;
      margin-top: 0;
      padding: 5px 5px;
    }
  }
  @media (max-width: 420px) {
    .logo img{
      width: 125px;
      padding: 2px;
    }
    nav .links a{
      width: 12%;
      font-size: xx-small;
    }
    nav .links button{
      font-size: xx-small;
      top: 0;
      margin-top: 0;
      padding: 5px 5px;
    }
  }
  @media (max-width: 300px) {
    .logo img{
      width: 105px;
      padding: 2px;
    }
    nav .links a{
      width: 12%;
      font-size: xx-small;
    }
    nav .links button{
      font-size: xx-small;
      top: 0;
      margin-top: 0;
      padding: 5px 5px;
    }
  }
  .dark nav{
    background: var(--dark);
    
  }
  .dark .navigation .links a{
    color: #fff;
  }
  .dark .navigation .links a.router-link-exact-active {
    color: #fff;
    text-decoration: 3px underline solid #fff;
  }
  .dark .navigation .links a:hover {
    color: #c55555;
  }
  .dark .navigation .links a.router-link-exact-active:hover {
    color: #c55555;
    text-decoration: 3px underline solid #c55555;
  }
  nav {
    border-bottom: 1px solid #c55555;
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    top:0;
    background: var(--light);
  }

  nav .links {
    padding: 12px;
    text-align: center;
    justify-content: center;
    display: inline-flex;
  }
  nav .links button {
    display: inline-flex;
    border: 0.5px solid transparent;
    top: 0;
    margin-top: 0;
    padding: 5px 5px;
    margin-left: 10px;
    color: #000;
  }
  .dark nav .links button {
    color: #fff;
  }
  nav .links button:hover {
    color: #c55555;
    border: 0.5px solid #c55555;
    border-radius: 10px;
  }
  .dark nav .links button:hover {
    color: #c55555;
    border: 0.5px solid #c55555;
  }
  nav .links a {
    display: inline-flex;
    font-weight: bold;
    color: black;
    text-decoration: none;
    padding: 5px 5px;
    margin-left: 20px;
    border-radius: 4px;
    cursor: pointer;
    
  }
  nav .links a.router-link-exact-active {
    color: black;
    text-decoration: 3px underline solid black;
  }
  nav .links a:hover {
    color: #c55555;
  }
  nav .links a.router-link-exact-active:hover {
    color: #c55555;
    text-decoration: 3px underline solid #c55555;
  }
</style>
