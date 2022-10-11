<template>
    <footer class="page-footer dark-footer-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 text-left">
                    <div class="footer-widget widget-about">
                        <a href="/"><img class="footer-logo" :src="dark" alt="footer logo" height="16"></a>
                        <p>Outsource Web Development Gig With Professional Software Engineers/Developers..</p>
                        <ul class="social-icons">
                            <li>
                                <a href="http://www.facebook.com/" target="_blank" rel="noopener">
                                    <fa6-brands-facebook-f/>
                                </a>
                            </li>
                            <li>
                                <a href="http://twitter.com/CodinMage" target="_blank" rel="noopener">
                                    <fa6-brands-twitter/>
                                </a>
                            </li>
                            <li>
                                <a href="http://instagram.com" target="_blank" rel="noopener">
                                    <!-- <i class="fab fa-google-plus-g"></i> -->
                                    <fa6-brands-instagram/>
                                </a>
                            </li>
                        </ul>


                        <p class="copywrite-txt">© 2022 <a href="/">CodinMage</a>. All Rights Reserved.
                        </p>
                    </div>
                </div>

                <div class="col-lg-3 text-left">
                    <div class="footer-widget">
                        <h5 class="footer-nav-title">Services</h5>
                        <ul class="footer-nav dynamic-nav">
                            <li><NuxtLink href="#">UI/UX Design</NuxtLink></li>
                            <li><NuxtLink href="#">Web Development </NuxtLink></li>
                            <li><NuxtLink href="#">Mobile App Development</NuxtLink></li>
                            <li><NuxtLink href="#">API Development </NuxtLink></li>
                            <li><NuxtLink href="#">Software Testing</NuxtLink></li>
                            <li><NuxtLink href="#">Product Management</NuxtLink></li>
                        </ul>
                    </div>
                </div>


                <div class="col-lg-3 text-left">
                    <div class="footer-widget">
                        <h5 class="footer-nav-title">Resources</h5>
                        <ul class="footer-nav dynamic-nav">
                            <li><NuxtLink to="#">Portfolio</NuxtLink></li>
                            <li><NuxtLink to="/about">About</NuxtLink></li>
                            <li><NuxtLink to="/about#team">Team</NuxtLink></li>

                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 text-left">
                    <div class="footer-widget">
                        <h5 class="footer-nav-title">Support</h5>
                        <ul class="footer-nav dynamic-nav">
                            <li><NuxtLink to="/contact-us">Contact</NuxtLink></li>

                            <li><NuxtLink href="#">Terms &amp; Conditions</NuxtLink></li>
                        </ul>
                    </div>
                </div>



            </div>
           
        </div>
     
    </footer>
</template>
<script setup>
import dark from "@/assets/dark_copy.svg"
import light from "@/assets/light_copy.svg"
import Fa6BrandsFacebookF from '~icons/fa6-brands/facebook-f'
import Fa6BrandsTwitter from '~icons/fa6-brands/twitter'
import Fa6BrandsInstagram from '~icons/fa6-brands/instagram'
</script>
<!-- <style scoped>
    .dark .footer{
        border-top: 1px solid #ee2528;
    }
    .footer{
       
        margin-top: 200px;
        margin-left: 0;
        margin-right: 0;
        display: inline-flex;
        justify-content: center;
        position: relative;
        bottom: 0;
        width: 100%;
        max-width: 100%;
    }
    .footer footer{
        display: flex;
        justify-content: center;
        clear: both;
        background: #000;
        color: white;
        position: relative;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 9rem;
    }
    .footer div.box{
        bottom: 0;
        left: 0;
        position: relative;
    }
</style> -->