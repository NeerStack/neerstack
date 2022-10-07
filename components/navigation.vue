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
                        <a class="custom-btn btn-small" data-bs-toggle="modal" data-bs-target="#quote-modal" href="#quote-modal">Get Quote Now</a>
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
  <main>
     <!-- Quote modal starts -->
     <div class="modal fade full-width-modal quote-modal" id="quote-modal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content white-bg">
              <div class="modal-header">
                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <!-- <i class="fas fa-times"></i> -->
                  <fa6-solid-xmark/>
              </button>
                  <!-- End of .close -->
              </div>
              <!-- End of .modal-header -->

              <div class="modal-body d-flex align-items-center justify-content-center text-center">
                  <div class="quote-form-wrapper text-center">
                      <h3>Get a Free Quote</h3>
                      <form method="POST" class="quote-form text-center row" action="#">
                          <div class="col-lg-6">
                              <input type="text" name="fname" placeholder="Name">
                          </div>
                          <div class="col-lg-6">
                              <input type="text" name="email" placeholder="Email">
                          </div>

                          <div class="col-lg-6">
                              <input type="text" name="phone" placeholder="Phone">
                          </div>
                          <div class="col-lg-6">
                              <input type="text" name="website" placeholder="Website">
                          </div>
                          <div class="col-lg-12">
                              <textarea placeholder="Message" name="message"></textarea>
                              <button type="submit" class="custom-btn secondary-btn w-100">GET A QUOTE</button>
                              <div class="social-icons-wrapper d-flex justify-content-center">
                                  <p>Follow us:</p>
                                  <ul class="social-icons">
                                      <li>
                                          <a href="http://www.facebook.com/" target="_blank" rel="noopener">
                                              <!-- <i class="fab fa-facebook-f"></i> -->
                                              <fa6-brands-facebook-f/>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="http://twitter.com/" target="_blank" rel="noopener">
                                              <!-- <i class="fab fa-twitter"></i> -->
                                              <fa6-brands-twitter/>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="http://youtube.com/" target="_blank" rel="noopener">
                                              <!-- <i class="fab fa-youtube"></i> -->
                                              <fa6-brands-youtube/>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="http://instagram.com" target="_blank" rel="noopener">
                                              <!-- <i class="fab fa-google-plus-g"></i> -->
                                              <fa6-brands-instagram/>
                                          </a>
                                      </li>
                                  </ul>
                                  <!-- End of .social-icons -->
                              </div>
                              <!-- End of .social-icons-wrapper -->
                          </div>
                      </form>
                      <!-- End of .quote-form -->
                  </div>
                  <!-- End of .quote-form-wrapper -->
              </div>
              <!-- End of .modal-body -->
          </div>
          <!-- End of .modal-content -->
      </div>
      <!-- End of .modal-dialog -->
  </div>
  <!-- End of .quote-modal -->
  </main>

</template>
<script setup>
import Fa6SolidSun from '~icons/fa6-solid/sun'
import Fa6SolidMoon from '~icons/fa6-solid/moon'
import { setColor } from "@/store/color";
import logoDark from "@/assets/dark.svg";
import logoLight from "@/assets/light.svg"
import Fa6BrandsFacebookF from '~icons/fa6-brands/facebook-f'
import Fa6BrandsTwitter from '~icons/fa6-brands/twitter'
import Fa6SolidXmark from '~icons/fa6-solid/xmark'
import Fa6BrandsBehance from '~icons/fa6-brands/behance'
import Fa6BrandsDribbble from '~icons/fa6-brands/dribbble'
import Fa6BrandsInstagram from '~icons/fa6-brands/instagram'
import Fa6BrandsYoutube from '~icons/fa6-brands/youtube'
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
