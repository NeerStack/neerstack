<template>
  <header class="page-header" id="header">
    <div class="container">
        <nav class="navbar navbar-expand-lg align-items-center">
          <NuxtLink class="navbar-brand" to="/">
            <span v-if="Setting.color === 'light'">
            <img :src="logoLight" alt="logo">
            </span>
            <span v-if="Setting.color === 'dark'">
                <img :src="logoDark" alt="logo">
            </span>
          </NuxtLink>
            <!-- End of .navbar-brand -->

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#custom-navbar" aria-controls="custom-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="custom-toggler-icon"></span>
            <span class="custom-toggler-icon"></span>
            <span class="custom-toggler-icon"></span>
         </button>
            <!-- End of .navbar-toggler -->

            <div class="flex collapse navbar-collapse" id="custom-navbar">
                <ul class="navbar-nav ml-auto align-items-center dynamic-nav">
                    <li class="nav-item has-dropdown">
                        <a href="#" class="nav-link">Services</a>
                        <ul class="submenu text-left">
                            <li>
                              <NuxtLink to="/website-design">Website Design</NuxtLink></li>
                            <li>
                              <NuxtLink to="/logo-and-branding">Logo &amp; Branding </NuxtLink></li>
                            <li>
                              <NuxtLink to="/mobile-app-development">Mobile App Development</NuxtLink></li>
                            <li>
                              <NuxtLink to="/search-engine-optimization">Search Engine Optimization</NuxtLink></li>

                        </ul>
                    </li>
                    <li class="nav-item">
                        <NuxtLink  class="nav-link" to="/about">About</NuxtLink>
                    </li>

                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/team">Team</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/pricing">Pricing</NuxtLink>
                    </li>

                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/contact-us">Contact</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="custom-btn btn-small" data-bs-toggle="modal" data-bs-target="#quote-modal" to="/quote">Get Quote Now</NuxtLink>
                    </li>
                    <!-- <li>
                      <button @click="toggle()">
                        <span v-if="Setting.color === 'light'">
                         <fa6-solid-moon/>
                        </span>
                        <span v-if="Setting.color === 'dark'">
                          <fa6-solid-sun/>
                      
                      </span>
                      </button>
                    </li> -->
                </ul>
            </div>
            
        </nav>
    </div>
  </header>

</template>
<script setup>
import Fa6SolidSun from '~icons/fa6-solid/sun'
import Fa6SolidMoon from '~icons/fa6-solid/moon'
import { setColor } from "@/store/color";
import logoDark from "@/assets/dark.svg";
import logoLight from "@/assets/light.svg"
  const Setting = setColor();

  onMounted(()=>{
    set(Setting.color);
  })

  function handleScroll() {
    // console.log(window.scrollY)
    if(process.client && window.scrollY > 20 ){
      document.getElementById('header').classList.add('scrolled')
    }else{
      document.getElementById('header').classList.remove('scrolled')
    }
    
  }
  
  onBeforeMount(()=>{
    window.addEventListener('scroll', handleScroll)
  })

  onBeforeUnmount(()=>{
    window.removeEventListener('scroll', handleScroll);
  })

  const set = (newTheme) => {
    useColorMode().preference = newTheme;
  };
  const toggle = () => {
    Setting.toggleColor();
    set(Setting.color);
  };
</script>

<!-- <style scoped>
  .navigation {
    width: 99%;
    border-bottom: 1px solid #ee2528;
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
    background: var(--black);
    
  }
  .dark .navigation .links a{
    color: #fff;
  }
  .dark .navigation .links a.router-link-exact-active {
    color: #fff;
    text-decoration: 3px underline solid #fff;
  }
  .dark .navigation .links a:hover {
    color: #ee2528;
  }
  .dark .navigation .links a.router-link-exact-active:hover {
    color: #ee2528;
    text-decoration: 3px underline solid #ee2528;
  }
  nav {
    border-bottom: 1px solid #ee2528;
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
    color: #ee2528;
    border: 0.5px solid #ee2528;
    border-radius: 10px;
  }
  .dark nav .links button:hover {
    color: #ee2528;
    border: 0.5px solid #ee2528;
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
    color: #ee2528;
  }
  nav .links a.router-link-exact-active:hover {
    color: #ee2528;
    text-decoration: 3px underline solid #ee2528;
  }
  
</style> -->
