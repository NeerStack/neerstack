<template>
<main>

    <!-- banner starts -->
<div class="banner d-flex align-items-center grey-bg">

    <!-- Breadcrumb starts -->
    <nav class="breadcrumb-wrapper" aria-label="breadcrumb">
        <div class="container">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Contact</li>
            </ol>
        </div>
    </nav>


    <div class="container">
        <div class="row no-gutters align-items-center">
            <div class="col-lg-6 text-center text-lg-left">
                <h1>Contact</h1>
                <p class="smaller-txt">Connect with us today, and let's turn your vision into reality. Our contact page is just a click away, ready to bridge the gap between your ideas and our expertise.</p>

            </div>
            <!-- End of .col-lg-5 -->

            <div class="col-lg-6">
                <div class="img-container text-center text-lg-right">
                    <img src="@/assets/banner/contact-banner.png" alt="Contact banner image" class="img-fluid">
                </div>
                <!-- End of .img-container -->
            </div>
            <!-- End of .col-lg-7 -->
        </div>
        <!-- End of .row -->
    </div>
    <!-- End of .container -->
</div>
<!-- End of .banner -->

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
                                          <a href="http://twitter.com/NeerStack" target="_blank" rel="noopener">
                                              <!-- <i class="fab fa-twitter"></i> -->
                                              <fa6-brands-twitter/>
                                          </a>
                                      </li>

                                      <li>
                                          <a href="http://instagram.com" target="_blank" rel="noopener">
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
                                        <a href="https://www.linkedin.com/company/NeerStack/" target="_blank" rel="noopener">
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

    <!-- location starts -->
<section class="location section-gap grey-bg" id="cynic-contact" data-scroll-offset="75" data-scroll-offset-mobile="75">
    <div class="container">
        <h2 class="section-title text-center">Our Location</h2>
        <ul class="nav nav-tabs location-tab justify-content-center" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" data-bs-toggle="tab" href="#location-tab-1">Ogun State</a>
            </li>
            <!-- <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#location-tab-2">Miami</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#location-tab-3">San Francisco</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#location-tab-4">New York</a>
            </li> -->
        </ul>
        <!-- End of .nav-tabs -->

        <div class="tab-content location-tab-content grid-wrapper" id="myTabContent">
            <div class="tab-pane fade show active" id="location-tab-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4712.287442866309!2d3.256286139043724!3d6.703056066043328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b982c0e7e7441%3A0x8139e1c67977ee33!2sDalemo%20Estate!5e0!3m2!1sen!2sng!4v1696445157224!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <!-- <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.4355495124!2d-118.69191514099776!3d34.020730497983934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos+Angeles%2C+CA%2C+USA!5e0!3m2!1sen!2sbd!4v1531805451146"
                    width="600" height="450" style="border:0" allowfullscreen></iframe> -->
            </div>
            <!-- <div class="tab-pane fade" id="location-tab-2">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.38943832612!2d-80.29949838161122!3d25.78254531076632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C+FL%2C+USA!5e0!3m2!1sen!2sbd!4v1531805857653"
                    width="600" height="450" style="border:0" allowfullscreen></iframe>
            </div>
            <div class="tab-pane fade" id="location-tab-3">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42437.17344437831!2d-122.48127727514952!3d37.76280447210564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sbd!4v1531805888648"
                    width="600" height="450" style="border:0" allowfullscreen></iframe>
            </div>
            <div class="tab-pane fade" id="location-tab-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583088354!2d-74.11976389828038!3d40.697663748695746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1531805909949"
                    width="600" height="450" style="border:0" allowfullscreen></iframe>
            </div> -->
        </div>
        <!-- End of .tab-content -->

        <div class="contact-info">
            <div class="row justify-content-between">
                <div class="col-lg-4 col-md-6">
                    <div class="info">
                        <h5>Head Quarter</h5>
                        <p>Adalemo<br>Sango Ota <br>Ogun State, Nigeria</p>
                    </div>
                    <!-- End of .info -->
                </div>
                <!-- End of .col-md-3 -->
                <div class="col-lg-3 col-md-6">
                    <div class="info">
                        <h5>Email</h5>
                        <a href="mailto:support@neerstack.com">support@neerstack.com</a>
                    </div>
                    <!-- End of .info -->
                </div>
                <!-- End of .col-md-3 -->
                <div class="col-lg-3 col-md-6">
                    <div class="info">
                        <h5>Phone</h5>
                        <a href="tel:+2348130972930">+234 (81)3 097-2930</a>
                    </div>
                    <!-- End of .info -->
                </div>
                <!-- End of .col-md-3 -->
                <div class="col-md-6 col-lg-2 text-lg-right info">
                    <a href="#" class="custom-btn secondary-btn" data-bs-toggle="modal" data-bs-target="#quote-modal">Contact
                        Us</a>
                </div>
            </div>
            <!-- End of .contact-in -->
        </div>
        <!-- End of .contact-info -->
    </div>
    <!-- End of .container -->
</section>
<!-- End of .location -->

</main>

</template>
<script setup>
import Swal from 'sweetalert2'
import loading from '@/assets/loading.gif'
import Fa6BrandsFacebookF from '~icons/fa6-brands/facebook-f'
import Fa6BrandsTwitter from '~icons/fa6-brands/x-twitter'
import Fa6BrandsInstagram from '~icons/fa6-brands/instagram'
import Fa6BrandsLinkedin from '~icons/fa6-brands/linkedin'
import Fa6BrandsGithub from '~icons/fa6-brands/github'
import under from '@/assets/under-construction.png'
import {setContact} from '@/store/email'
const Email = setContact()

const setdata = {
    title: "NeerStack | Contact"
}
useHead({
    title: computed(() => setdata.title)
})


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
           title: 'Your message has been sent successfully'
       })
      }
      if(Email.error){
        isLoading.value = false
        toast.fire({
            icon: 'error',
            title: 'Something went wrong, please try again later'
        })
      }
    })
  }
}

</script>
<style scoped>
.contact{
    display: flex;
    justify-content: center;
    margin-top: 200px;
    margin-bottom: 200px;
}
</style>
