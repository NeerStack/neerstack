<template>
    <main>
        <!-- banner starts -->
<div class="banner d-flex align-items-center grey-bg">

    <!-- Breadcrumb starts -->
    <nav class="breadcrumb-wrapper" aria-label="breadcrumb">
        <div class="container">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Portfolio</li>
            </ol>
        </div>
    </nav>


    <div class="container">
        <div class="row no-gutters align-items-center">
            <div class="col-lg-6 text-center text-lg-left">
                <h1>Portfolio</h1>
                <p class="smaller-txt">Crafting code, one project at a time, NeerStack's portfolio speaks volumes of our expertise, innovation, and dedication to turning ideas into exceptional digital solutions</p>

            </div>
            <!-- End of .col-lg-5 -->

            <div class="col-lg-6">
                <div class="img-container text-center text-lg-right">
                    <img src="@/assets/banner/portfolio-banner.png" alt="Banner image" class="img-fluid">
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

<!-- Projects starts -->
<section class="projects section-gap light-grey-bg" id="cynic-projects" data-scroll-offset="75">
    <div class="container">
        <h2 class="section-title text-center">Featured Projects</h2>

        <div class="item-showcase grid-wrapper__small-padding">



            <div class="row ">

                <div class="col-lg-6 col-md-6 ">
                        <a href="/portfolio" class="img-card text-center portfolio-card white-bg " data-bs-toggle="modal" data-bs-target="#producemart-modal">
                            <img src="@/assets/products/Producemart.png" alt="product" class="img-fluid">
                            <h4>
                                <span>ProduceMart</span>Web Development</h4>
                        </a>
                        <!-- End of .img-card -->
                    </div>
                    <!-- End of .col-lg-4 -->

                    <div class="col-lg-6 col-md-6 ">
                        <a href="/portfolio" class="img-card text-center portfolio-card white-bg " data-bs-toggle="modal" data-bs-target="#magehub-modal">
                            <img src="@/assets/products/mageHub.png" alt="product" class="img-fluid">
                            <h4>
                                <span>MageHub</span>Mobile Application</h4>
                        </a>
                        <!-- End of .img-card -->
                    </div>
                    <!-- End of .col-lg-4 -->

            </div>
            <!-- <div class="col-12 text-center"><NuxtLink class="nav-link" to="/portfolio">DISCOVER MORE WORKS</NuxtLink></div> -->
            <!-- End of .row -->
        </div>
        <!-- End of .project-showcase -->
    </div>
    <!-- End of .container -->
</section>
<!-- End of .projects -->

<!-- Projects starts -->
<section class="projects section-gap grey-bg" id="cynic-projects" data-scroll-offset="75">
    <div class="container">
        <h2 class="section-title text-center">Full Portfolio</h2>

        <div class="item-showcase grid-wrapper__small-padding">


                <div class="btn-filter-wrap nav nav-tabs justify-content-center">
                    <button class="btn-filter nav-link is-checked" data-filter="*">
                        <i class="ml-tro-3-trophy-cup-medallion-locket-win"></i>All Work</button>
                    <button class="btn-filter nav-link" data-filter=".category-a">
                        <i class="ml-symtwo-34-cursor-click-browser-website-arrow-computer"></i>Website</button>
                    <button class="btn-filter nav-link" data-filter=".category-b">
                        <i class="ml-des-57-upload-download-sync-application-device-mobile-computer"></i>Mobile App</button>
                </div>
                <!-- End of .btn-filter-wrap -->


            <div class="row iso-grid">

                    <div class="col-lg-4 col-md-6 item category-a">
                        <a href="/portfolio" class="img-card text-center portfolio-card white-bg " data-bs-toggle="modal" data-bs-target="#producemart-modal">
                            <img src="@/assets/products/Producemart.png" alt="product" class="img-fluid">
                            <h4>
                                <span>ProduceMart</span>Web Development</h4>
                        </a>
                        <!-- End of .img-card -->
                    </div>
                    <!-- End of .col-lg-4 -->

                    <div class="col-lg-4 col-md-6 item category-b">
                        <a href="/portfolio" class="img-card text-center portfolio-card white-bg " data-bs-toggle="modal" data-bs-target="#magehub-modal">
                            <img src="@/assets/products/mageHub.png" alt="product" class="img-fluid">
                            <h4>
                                <span>MageHub</span>Mobile Application</h4>
                        </a>
                        <!-- End of .img-card -->
                    </div>
                    <!-- End of .col-lg-4 -->

            </div>
            <!-- <div class="col-12 text-center"><NuxtLink class="nav-link" to="/portfolio">LOAD MORE WORKS</NuxtLink></div> -->
            <!-- End of .row -->
        </div>
        <!-- End of .project-showcase -->
    </div>
    <!-- End of .container -->
</section>
<!-- End of .projects -->


    </main>
</template>
<script setup>
import '@/assets/css/vendor/owl.carousel.min.css'
import '@/assets/css/vendor/magnific-popup.css'
import '@/assets/css/vendor/owl.theme.default.min.css'
import '@/assets/css/vendor/bootstrap.min.css'

const setdata = {
    title: "NeerStack | Portfolio"
}
useHead({
    title: computed(() => setdata.title)
})


</script>
