<template>
  <header class="page-header" id="header">
    <div class="container">
        <nav class="navbar navbar-expand-lg align-items-center">
          <div class="container-fluid">
          <NuxtLink @click="handleClick($event)" class="navbar-brand" to="/">
                <span v-if="Setting.color === 'light'">
                <img :src="logoLight" alt="logo">
                </span>
                <span v-if="Setting.color === 'dark'">
                    <img :src="logoDark" alt="logo">
                </span>
              </NuxtLink>
                <!-- End of .navbar-brand -->

                <button @click="handleNav()" class="navbar-toggler" type="button"  aria-controls="custom-navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span  class="custom-toggler-icon"></span>
                    <span  class="custom-toggler-icon"></span>
                    <span  class="custom-toggler-icon"></span>
                </button>
                <!-- End of .navbar-toggler -->

                <div class="subnav navbar-collapse" :class="{showNav: subnav == true}" id="custom-navbar">
                    <ul class="navbar-nav ml-auto align-items-center dynamic-nav">
                        <li class="nav-item has-dropdown">
                            <a @click="handledrop()"  class="nav-link">Services</a>
                            <ul  class="submenu2 text-justify bg-gray-700" :class="{show: submenushow == true}">
                                <li class="text-justify">
                                  <NuxtLink @click="handleClick($event)" to="/design">UI/UX Design</NuxtLink></li>
                                <li class="text-justify">
                                  <NuxtLink @click="handleClick($event)" to="/web-dev">Website Development </NuxtLink></li>
                                <li class="text-justify">
                                  <NuxtLink @click="handleClick($event)" to="/mobile-dev">Mobile App Development</NuxtLink></li>
                                <li class="text-justify">
                                  <NuxtLink @click="handleClick($event)" to="/software-test">Software Testing</NuxtLink></li>
                                <li class="text-justify">
                                  <NuxtLink @click="handleClick($event)" to="/product-management">Product Management</NuxtLink></li>

                            </ul>
                        </li>
                        <li class="nav-item">
                            <NuxtLink @click="handleClick($event)" class="nav-link" to="/about">About</NuxtLink>
                        </li>

                        <li class="nav-item">
                            <NuxtLink @click="handleClick($event)" class="nav-link" to="/portfolio">Portfolio</NuxtLink>
                        </li>
                        <!-- <li class="nav-item">
                            <NuxtLink @click="handleClick($event)" class="nav-link" to="/pricing">Pricing</NuxtLink>
                        </li> -->

                        <li class="nav-item">
                            <NuxtLink @click="handleClick($event)" class="nav-link" to="/contact-us">Contact</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <a class="custom-btn btn-small" data-bs-toggle="modal" data-bs-target="#quote-modal" href="#">Get Quote Now</a>
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
          </div>


        </nav>
    </div>
  </header>

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
                  <div v-if="!isLoading" class="quote-form-wrapper text-center">
                      <h3>Get a Free Quote</h3>
                      <form  @submit.once class="quote-form text-center row">
                          <div class="col-lg-6">
                              <input v-model="Email.name" type="text" name="user_name" placeholder="Name" required>
                          </div>
                          <div class="col-lg-6">
                              <input v-model="Email.email" type="text" name="user_email" placeholder="Email" required>
                          </div>

                          <div class="col-lg-6">
                              <input v-model="Email.phone" type="text" name="phone" placeholder="Phone">
                          </div>
                          <div class="col-lg-6">
                              <input v-model="Email.website" type="text" name="website" placeholder="Website/Website Name">
                          </div>
                          <div class="col-lg-12">
                              <textarea v-model="Email.message" placeholder="Message" name="message" required></textarea>
                              <button @click="send" class="custom-btn secondary-btn w-100">GET A QUOTE</button>

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
                                          <a href="http://twitter.com/NeerStack" target="_blank" rel="noopener">
                                              <!-- <i class="fab fa-twitter"></i> -->
                                              <fa6-brands-twitter/>
                                          </a>
                                      </li>

                                      <li>
                                          <a href="http://www.instagram.com" target="_blank" rel="noopener">
                                              <!-- <i class="fab fa-google-plus-g"></i> -->
                                              <fa6-brands-instagram/>
                                          </a>
                                      </li>
                                      <li>
                                        <a href="https://github.com/NeerStack" target="_blank" rel="noopener">
                                            <!-- <i class="fab fa-google-plus-g"></i> -->
                                            <fa6-brands-github/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/neerstack/" target="_blank" rel="noopener">
                                            <!-- <i class="fab fa-behance"></i> -->
                                            <fa6-brands-linkedin/>
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
                  <div v-else>
                    <img :src="loading" alt="loader">
                  </div>
              </div>

              <!-- End of .modal-body -->
          </div>
          <!-- End of .modal-content -->
      </div>
      <!-- End of .modal-dialog -->
    </div>
    <!-- End of .quote-modal -->

   <!-- Team-modal starts -->
    <div class="modal fade team-modal" id="team-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class=" modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <!-- <i class="fas fa-times"></i> -->
                    <fa6-solid-xmark/>
                </button>
                    <!-- End of .close -->
                </div>
                <!-- End of .modal-header -->
                <div class="flex justify-center">
                  <div class="container">
                  <div class="grid-wrapper">
                  <div class="row justify-center">

                  <div class="modal-body text-center col-xl-12 ">
                    <!-- <img src="https://res.cloudinary.com/taiworoqeeb/image/upload/v1666615605/raqeeb_taiwo-removebg-preview_ctxdnv.png" alt="team modal image" class="inline-flex justify-center img-fluid modal-feat-img"/> -->
                    <img src="@/assets/team/team-member-3.png" alt="team modal image" class="inline-flex justify-center img-fluid modal-feat-img"/>
                    <div class="modal-title">
                        <h4>Raqeeb Taiwo
                            <!-- <span>CEO/Team Lead</span> -->
                            <span>Software Developer/Team Lead</span>
                        </h4>
                    </div>
                    <!-- End of .modal-title -->
                    <!-- <p>To be fair, in certain contexts, your professional bio does need to be more formal, like Mr. Erickson's up there. But in many cases, writing a bio that's readable even conversational is actually a really good thing. But once created,
                        this bio should represent who you are in the eyes.</p> -->

                    <ul class="social-icons">
                        <li>
                            <a href="http://www.linkedin.com/in/taiworoqeeb" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-behance"></i> -->
                                <fa6-brands-linkedin/>
                            </a>
                        </li>
                        <li>
                            <a href="http://twitter.com/TaiwoRaqeeb" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-twitter"></i> -->
                                <fa6-brands-twitter/>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.github.com/taiworoqeeb" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-google-plus-g"></i> -->
                                <fa6-brands-github/>
                            </a>
                        </li>

                    </ul>
                    <!-- End of .social-icons -->
                  </div>

                  <div class="modal-body text-center col-xl-4 col-lg-6">
                    <!-- <img src="https://res.cloudinary.com/taiworoqeeb/image/upload/v1666615773/victor-removebg-preview_foqtez.png" alt="team modal image" class="inline-flex justify-center img-fluid modal-feat-img"/> -->
                    <img src="@/assets/team/team-member-3.png" alt="team modal image" class="inline-flex justify-center img-fluid modal-feat-img"/>
                    <div class="modal-title">
                        <h4>Victor Ahonsi
                            <!-- <span>Marketing/Sale Manager</span> -->
                            <span>Project/Product Manager</span>

                        </h4>
                    </div>
                    <!-- End of .modal-title -->
                    <!-- <p>To be fair, in certain contexts, your professional bio does need to be more formal, like Mr. Erickson's up there. But in many cases, writing a bio that's readable even conversational is actually a really good thing. But once created,
                        this bio should represent who you are in the eyes.</p> -->

                    <ul class="social-icons">
                        <li>
                            <a href="http://www.linkedin.com/" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-behance"></i> -->
                                <fa6-brands-linkedin/>
                            </a>
                        </li>
                        <li>
                            <a href="http://twitter.com/" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-twitter"></i> -->
                                <fa6-brands-twitter/>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.github.com" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-google-plus-g"></i> -->
                                <fa6-brands-github/>
                            </a>
                        </li>

                    </ul>
                    <!-- End of .social-icons -->
                  </div>

                  <div class="modal-body text-center col-xl-4 col-lg-6">
                    <img src="@/assets/team/team-member-3.png" alt="team modal image" class="inline-flex justify-center img-fluid modal-feat-img"/>
                    <div class="modal-title">
                        <h4>Opeyemi Awotunde
                            <!-- <span>CTO</span> -->
                            <span>Software Developer</span>

                        </h4>
                    </div>
                    <!-- End of .modal-title -->
                    <!-- <p>To be fair, in certain contexts, your professional bio does need to be more formal, like Mr. Erickson's up there. But in many cases, writing a bio that's readable even conversational is actually a really good thing. But once created,
                        this bio should represent who you are in the eyes.</p> -->

                    <ul class="social-icons">
                        <li>
                            <a href="https://www.linkedin.com/in/opeyemi-awotunde-b7631219b" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-behance"></i> -->
                                <fa6-brands-linkedin/>
                            </a>
                        </li>
                        <li>
                            <a href="http://twitter.com/" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-twitter"></i> -->
                                <fa6-brands-twitter/>
                            </a>
                        </li>
                        <li>
                            <a href="Https://www.github.com/sirtiva" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-google-plus-g"></i> -->
                                <fa6-brands-github/>
                            </a>
                        </li>

                    </ul>
                    <!-- End of .social-icons -->
                  </div>

                  <div class="modal-body text-center col-xl-4 col-lg-6">
                    <img src="@/assets/team/team-member-5.png" alt="team modal image" class="inline-flex justify-center img-fluid modal-feat-img"/>
                    <div class="modal-title">
                        <h4>Mateen Williams
                            <!-- <span>Team Member</span> -->
                            <span>UI/UX Designer</span>
                        </h4>
                    </div>
                    <!-- End of .modal-title -->
                    <!-- <p>To be fair, in certain contexts, your professional bio does need to be more formal, like Mr. Erickson's up there. But in many cases, writing a bio that's readable even conversational is actually a really good thing. But once created,
                        this bio should represent who you are in the eyes.</p> -->

                    <ul class="social-icons">
                        <li>
                            <a href="https://www.linkedin.com/in/olawami-williams-927b50175" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-behance"></i> -->
                                <fa6-brands-linkedin/>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-twitter"></i> -->
                                <fa6-brands-twitter/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.behance.net/olawamiwilliams" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-google-plus-g"></i> -->
                                <fa6-brands-behance/>
                            </a>
                        </li>

                    </ul>
                    <!-- End of .social-icons -->
                  </div>

                  <div class="modal-body text-center col-xl-4 col-lg-6">
                    <img src="@/assets/team/team-member-6.png" alt="team modal image" class="inline-flex justify-center img-fluid modal-feat-img"/>
                    <div class="modal-title">
                        <h4>Nurudeen Rabiu
                          <!-- <span>Team Member</span> -->
                            <span>Software Developer</span>

                        </h4>
                    </div>
                    <!-- End of .modal-title -->
                    <!-- <p>To be fair, in certain contexts, your professional bio does need to be more formal, like Mr. Erickson's up there. But in many cases, writing a bio that's readable even conversational is actually a really good thing. But once created,
                        this bio should represent who you are in the eyes.</p> -->

                    <ul class="social-icons">
                        <li>
                            <a href="http://www.linkedin.com/" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-behance"></i> -->
                                <fa6-brands-linkedin/>
                            </a>
                        </li>
                        <li>
                            <a href="http://twitter.com/" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-twitter"></i> -->
                                <fa6-brands-twitter/>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.github.com" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-google-plus-g"></i> -->
                                <fa6-brands-github/>
                            </a>
                        </li>

                    </ul>
                    <!-- End of .social-icons -->
                  </div>

                  <div class="modal-body text-center col-xl-4 col-lg-6">
                    <img src="@/assets/team/team-member-6.png" alt="team modal image" class="inline-flex justify-center img-fluid modal-feat-img"/>
                    <div class="modal-title">
                        <h4>Oladapo Olatunbosun
                          <!-- <span>Team Member</span> -->
                            <span>Flutter Developer</span>

                        </h4>
                    </div>
                    <!-- End of .modal-title -->
                    <!-- <p>To be fair, in certain contexts, your professional bio does need to be more formal, like Mr. Erickson's up there. But in many cases, writing a bio that's readable even conversational is actually a really good thing. But once created,
                        this bio should represent who you are in the eyes.</p> -->

                    <ul class="social-icons">
                        <li>
                            <a href="http://www.linkedin.com/" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-behance"></i> -->
                                <fa6-brands-linkedin/>
                            </a>
                        </li>
                        <li>
                            <a href="http://twitter.com/" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-twitter"></i> -->
                                <fa6-brands-twitter/>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.github.com" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-google-plus-g"></i> -->
                                <fa6-brands-github/>
                            </a>
                        </li>

                    </ul>
                    <!-- End of .social-icons -->
                  </div>

                  </div>
                  </div>
                  </div>
                </div>




                <!-- End of .modal-body -->
            </div>
            <!-- End of .modal-content -->
        </div>
        <!-- End of .modal-dialog -->
    </div>
  <!-- End of .team-modal -->

 <!-- Product Modal Starts -->
<div class="modal fade full-width-modal product-modal" id="producemart-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <i class="fas fa-times"></i>
                </button>
                <!-- End of .close -->
            </div>
            <!-- End of .modal-header -->

            <div class="modal-body">
                <div class="row no-gutters">
                    <div class="col-lg-6">
                        <div class="modal-img text-center">
                            <img src="@/assets/products/Producemart.png" alt="producemart-modal" class="img-fluid">
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="modal-body__inner-content">
                            <h4>
                                <!-- <span>ProduceMart</span> -->
                                ProduceMart
                            </h4>
                            <p>Producemart.com is an online B2B marketplace for wholesale agricultural produce and ingredients. Producemart makes it simpler than ever to list and source produce at a local, regional or international level. Acting as a platform for both suppliers and buyers, Producemart.com allows more efficient connections and assists with overcoming challenges such as language barriers, potential security concerns around engaging with new buyers and suppliers and cross-border purchases.</p>
                            <NuxtLink to="https://www.producemart.com" target="_blank" class="hyperlink">Launch Website</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End of .modal-body -->
        </div>
        <!-- End of .modal-content -->
    </div>
    <!-- End of .modal-dialog -->
</div>

<div class="modal fade full-width-modal product-modal" id="magehub-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <i class="fas fa-times"></i>
                </button>
                <!-- End of .close -->
            </div>
            <!-- End of .modal-header -->

            <div class="modal-body">
                <div class="row no-gutters">
                    <div class="col-lg-6">
                        <div class="modal-img text-center">
                            <img src="@/assets/products/mageHub.png" alt="magehub-modal" class="img-fluid">
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="modal-body__inner-content">
                            <h4>
                                <!-- <span>ProduceMart</span> -->
                                MageHUB
                            </h4>
                            <p>Discover the incredible potential of MageHUB, a revolutionary app that empowers you to connect with friends and forge new connections with a diverse community spanning the globe. Seamlessly communicate with your friends through our innovative chat feature, while also leveraging the power of advanced AI tools to enhance your experience. Engage in meaningful conversations, expand your network, and explore endless possibilities with MageHUB. Join us today and unlock a world of boundless opportunities at your fingertips.</p>
                            <NuxtLink to="#" class="hyperlink" :disabled="true">Coming Soon...</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End of .modal-body -->
        </div>
        <!-- End of .modal-content -->
    </div>
    <!-- End of .modal-dialog -->
</div>
<!-- End of .portfolio-modal -->


</template>
<script setup>
import Fa6SolidSun from '~icons/fa6-solid/sun'
import Fa6SolidMoon from '~icons/fa6-solid/moon'
import { setColor } from "@/store/color";
import logoDark from "@/assets/newLogo.png";
import logoLight from "@/assets/newLogo.png"
import Fa6BrandsLinkedin from '~icons/fa6-brands/linkedin'
import Fa6BrandsGithub from '~icons/fa6-brands/github'
import Fa6BrandsFacebookF from '~icons/fa6-brands/facebook-f'
import Fa6BrandsTwitter from '~icons/fa6-brands/x-twitter'
import Fa6SolidXmark from '~icons/fa6-solid/xmark'
import Fa6BrandsBehance from '~icons/fa6-brands/behance'
import Fa6BrandsDribbble from '~icons/fa6-brands/dribbble'
import Fa6BrandsInstagram from '~icons/fa6-brands/instagram'
import Fa6BrandsYoutube from '~icons/fa6-brands/youtube'
import {setEmail} from '@/store/email'
import Swal from 'sweetalert2'
import loading from '@/assets/loading.gif'
const Email = setEmail()

  const Setting = setColor();

  onMounted(()=>{
    set(Setting.color);
  })
var submenushow = ref(false)
var subnav = ref(false)

  function handleScroll() {
    // console.log(window.scrollY)
    if(process.client && window.scrollY > 20 ){
      document.getElementById('header').classList.add('scrolled')
    }else{
      document.getElementById('header').classList.remove('scrolled')
    }

  }

  function handledrop(){
    submenushow.value = !submenushow.value

  }
  function handleNav(){
    subnav.value = !subnav.value


  }

  const handleClick = (e) =>{
    if(e.type === 'click'){
      if(subnav.value){
      subnav.value = false
    }
    if(submenushow.value){
      submenushow.value = false
    }
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

const isLoading = ref(false)

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

const send = () => {
  if(!Email.name || !Email.email || !Email.message){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Fill the required information!',
    })
  }else{
    isLoading.value = true
    Email.send()
    .then(() =>{
      if(Email.status){
        isLoading.value = false
        toast.fire({
          icon: 'success',
          title: 'Your quote has been sent successfully!',
        })
      }
      if(Email.error){
        isLoading.value = false
        toast.fire({
          icon: 'error',
          title: 'Something went wrong!',
        })
      }
    })
  }
}



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
