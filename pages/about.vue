<template>
    <main>
        <!-- banner starts -->
<div class="banner d-flex align-items-center grey-bg">

    <!-- Breadcrumb starts -->
    <nav class="breadcrumb-wrapper" aria-label="breadcrumb">
        <div class="container">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">About Us</li>
            </ol>
        </div>
    </nav>


    <div class="container">
        <div class="row no-gutters align-items-center">
            <div class="col-lg-6 text-center text-lg-left">
                <h1>About Us</h1>
                <p class="smaller-txt text-justify">NeerStack is a Digital Agency Company that Design Websites for Clients All Over the World Using Latest Technologies. <br> Our team of experts is highly experienced in their respective fields. We offer services like Web Development, Graphic Designing, SEO Services etc.</p>

            </div>
            <!-- End of .col-lg-5 -->

            <div class="col-lg-6">
                <div class="img-container text-center text-lg-right">
                    <img :src="aboutBanner" alt="Home banner image" class="img-fluid">
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


<!-- our features starts -->
<section class="features section-gap" id="cynic-about" data-scroll-offset="165">
    <div class="container">


            <div class="features-grid">
                <div class="row align-items-center">
                    <div class="col-lg-6 text-center text-lg-left">
                        <div class="img-container">
                            <img :src="featuresImg1" alt="why choose us" class="img-fluid">

                        </div>
                        <!-- End of .img-container -->
                    </div>
                    <!-- End of .col-lg-6 -->

                    <div class="col-lg-5 offset-lg-1">
                        <div class="features-content">
                            <h2 class="section-title">Our Mission</h2>
                            <p >Our mission is to help our customers succeed through web design and development. We work closely together to understand their business goals, processes, and challenges. In order to achieve these goals, we focus on meeting the following objectives:
                    </p>
                    <ul>
                        <li>
                            <p>Deliver quality web solutions</p>
                        </li>
                        <li>
                            <p>Provide timely service</p>
                        </li>
                        <li>
                            <p>Ensure that your project meets its deadlines</p>
                        </li>
                        <li>
                            <p>Keep costs down</p>
                        </li>
                        <li>
                            <p>Increase sales</p>
                        </li>
                    </ul>





                        </div>
                        <!-- End of .features-content -->
                    </div>
                    <!-- End of .col-lg-6 -->
                </div>
                <!-- End of .row -->
            </div>
            <!-- End of .features-grid -->

            <div class="features-grid">
                <div class="row align-items-center">
                    <div class="col-lg-6 order-lg-2 offset-lg-1 text-center text-lg-right">
                        <div class="img-container">
                            <img :src="featuresImg2" alt="why choose us" class="img-fluid">

                        </div>
                        <!-- End of .img-container -->
                    </div>
                    <!-- End of .col-lg-6 -->

                    <div class="col-lg-5">
                        <div class="features-content">
                            <h2 class="section-title">Our Vision</h2>
                            <p>We believe in providing the best products and services to our clients. We strive to deliver high-quality results, while exceeding expectations. To us, success means being able to exceed customer's expectations. We encourage innovation and creativity to achieve success. We value integrity, professionalism, hard work, loyalty, respect, and teamwork. When we do well, we do right. We welcome challenges.</p>





                        </div>
                        <!-- End of .features-content -->
                    </div>
                    <!-- End of .col-lg-6 -->
                </div>
                <!-- End of .row -->
            </div>
            <!-- End of .features-grid -->

            <div class="features-grid">
                <div class="row align-items-center">
                    <div class="col-lg-6 text-center text-lg-left">
                        <div class="img-container">
                            <img :src="featuresImg3" alt="why choose us" class="img-fluid">

                        </div>
                        <!-- End of .img-container -->
                    </div>
                    <!-- End of .col-lg-6 -->

                    <div class="col-lg-5 offset-lg-1">
                        <div class="features-content">
                            <h2 class="section-title">Our Value</h2>
                            <p>We have several values that guide our behavior and motivate us to keep striving to be the best. These values are: </p>
                    <p><span>Passionate</span> - Passionate people are driven by their interests and talents. They take pride in what they do and enjoy the journey.</p>
                    <p><span>Dedicated</span> - Dedicated people put 100% of their effort into everything they do. They make decisions based upon facts rather than emotions.</p>
                    <p><span>Creative</span> - Creative people think outside the box to find innovative solutions to problems.</p>





                        </div>
                        <!-- End of .features-content -->
                    </div>
                    <!-- End of .col-lg-6 -->
                </div>
                <!-- End of .row -->
            </div>
            <!-- End of .features-grid -->


    </div>
    <!-- End of .container -->
</section>
<!-- End of .features -->
    </main>
</template>

<script setup>
    import aboutBanner from '@/assets/banner/about-banner.png'
    import featuresImg1 from '@/assets/features/features-img-4.png'
    import featuresImg2 from '@/assets/features/features-img-5.png'
    import featuresImg3 from '@/assets/features/features-img-3.png'

    const setdata = {
    title: "NeerStack | About"
}
useHead({
    title: computed(() => setdata.title)
})
</script>
