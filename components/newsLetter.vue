<template>
    <section class="newsletter section-gap theme-bg-d newsletter__white">
    <div class="container">
        <h2 class="text-center">Sign up for our newsletter to stay up to
                <br>date with tech news!</h2>

            <form @submit.prevent  class="newsletter-form">
                <div class="row justify-content-between">
                    <div class="col-md">
                        <input v-model="News.fullname" type="text" name="fname" placeholder="Firstname Lastname" required>
                    </div>
                    <div class="col-md">
                        <input v-model="News.email" type="text" name="email" placeholder="Email" required>
                    </div>

                    <div class="col-md-auto">
                        <a @click="sendEmail" class="custom-btn secondary-btn">SUBSCRIBE</a>
                    </div>
                </div>
                <!-- End of .row -->
            </form>
            <!-- End of .newsletter-form -->

            <div class="social-icons-wrapper d-flex justify-content-center">
                <p>Follow us:</p>
                <ul class="social-icons">
                    <li>
                        <a href="http://www.facebook.com/" target="_blank" rel="noopener">
                            <fa6-brands-facebook-f/>
                        </a>
                    </li>
                    <li>
                        <a href="http://twitter.com/NeerStack" target="_blank" rel="noopener">
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
    <!-- End of .container -->
</section>
</template>

<script setup>
import Fa6BrandsFacebookF from '~icons/fa6-brands/facebook-f'
import Fa6BrandsTwitter from '~icons/fa6-brands/x-twitter'
import Fa6BrandsInstagram from '~icons/fa6-brands/instagram'
import Fa6BrandsLinkedin from '~icons/fa6-brands/linkedin'
import Fa6BrandsGithub from '~icons/fa6-brands/github'
import { setNews } from '@/store/email'
import Swal from 'sweetalert2'

const News = setNews();

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

const sendEmail = () => {
    if(!News.fullname || !News.email){
        Swal.fire({
            icon: 'warning',
            title: "Invalid Input",
            text: 'Please fill all fields'
        })
        return
    }

    News.news()
    .then(() =>{
        if(News.status){
            toast.fire({
                icon: 'success',
                title: 'You have successfully subscribed to our newsletter'
            })
        }else{
            toast.fire({
                icon: 'error',
                title: 'Something went wrong, please try again later'
            })
        }
        if(News.error){
            toast.fire({
                icon: 'error',
                title: 'Something went wrong, please try again later'
            })
        }
    })
}
</script>
