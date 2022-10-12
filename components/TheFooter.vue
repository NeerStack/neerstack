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
                            <li>
                                <a href="http://www.github.com" target="_blank" rel="noopener">
                                    <!-- <i class="fab fa-google-plus-g"></i> -->
                                    <fa6-brands-github/>
                                </a>
                            </li>
                            <li>
                                <a href="http://www.linkedin.com/" target="_blank" rel="noopener">
                                    <!-- <i class="fab fa-behance"></i> -->
                                    <fa6-brands-linkedin/>
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
                            <li><NuxtLink href="/design">UI/UX Design</NuxtLink></li>
                            <li><NuxtLink href="/web-dev">Web Development </NuxtLink></li>
                            <li><NuxtLink href="/mobile-dev">Mobile App Development</NuxtLink></li>
                            <li><NuxtLink href="/api-dev">API Development </NuxtLink></li>
                            <li><NuxtLink href="/software-test">Software Testing</NuxtLink></li>
                            <li><NuxtLink href="/product-management">Product Management</NuxtLink></li>
                        </ul>
                    </div>
                </div>


                <div class="col-lg-3 text-left">
                    <div class="footer-widget">
                        <h5 class="footer-nav-title">Resources</h5>
                        <ul class="footer-nav dynamic-nav">
                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#product-modal">Portfolio</a></li>
                            <li><NuxtLink to="/about">About</NuxtLink></li>
                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#team-modal">Team</a></li>

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
import Fa6BrandsLinkedin from '~icons/fa6-brands/linkedin'
import Fa6BrandsGithub from '~icons/fa6-brands/github'
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