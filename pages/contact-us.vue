<template>
    
              <div class="contact flex align-center justify-center text-center">
                  <div v-if="!isLoading" class="quote-form-wrapper text-center">
                      <h3>Contact Us</h3>
                      <form  @submit.prevent class="quote-form text-center row">
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
                            <input v-model="Email.subject" type="text" name="subject" placeholder="Subject">
                        </div>
                          <div class="col-lg-12">
                              <textarea v-model="Email.message" placeholder="Message" name="message" required></textarea>
                              <button @click="send" class="custom-btn secondary-btn w-100">SUBMIT</button>

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
                                          <a href="http://twitter.com/CodinMage" target="_blank" rel="noopener">
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
                  <div v-else>
                    <img :src="loading" alt="loader">
                  </div>
              </div>

         
  
</template>
<script setup>
import Swal from 'sweetalert2'
import loading from '@/assets/loading.gif'
import Fa6BrandsFacebookF from '~icons/fa6-brands/facebook-f'
import Fa6BrandsTwitter from '~icons/fa6-brands/twitter'
import Fa6BrandsInstagram from '~icons/fa6-brands/instagram'
import Fa6BrandsYoutube from '~icons/fa6-brands/youtube'
import under from '@/assets/under-construction.png'
import {setContact} from '@/store/email'
const Email = setContact()

const setdata = {
    title: "CodinMage | Contact"
}
useHead({
    title: computed(() => setdata.title)
})
definePageMeta({
  key: route => route.fullPath
})

const isLoading = ref(false)

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
        Swal.fire("Sent", Email.status, 'success')
      }
      if(Email.error){
        isLoading.value = false
        Swal.fire("Oops...", Email.error, 'error')
      }
    })
  }
}
</script>
<style scoped>
.contact{
    margin-top: 200px;
    margin-bottom: 200px;
}
</style>