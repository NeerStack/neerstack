<template>
    <main>
        <div class="banner d-flex align-items-center light-grey-bg">

            <!-- Breadcrumb starts -->
            <nav class="breadcrumb-wrapper mb-20" aria-label="breadcrumb">
                <div class="container">
                    <ol class="breadcrumb mb-20">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Mobile App Development</li>
                    </ol>
                </div>
            </nav>


            <div class="container  mt-10 mb-20">
                <div class="row no-gutters align-items-center">
                    <div class="col-lg-6  text-center text-lg-left">
                        <h1 class="mt-20">Mobile App Development</h1>
                        <p class="larger-txt text-justify">Mobile development refers to the creation of software applications that are designed to run on mobile devices such as smartphones and tablets. These applications, also known as "apps," can be developed for a variety of purposes, including productivity, entertainment, communication, and more.</p>

                    </div>


                    <div class="col-lg-6">
                        <div class="img-container text-center text-lg-right">
                            <img :src="WebsiteDesign" alt="Banner image" class="img-fluid">
                        </div>
                        <!-- End of .img-container -->
                    </div>

                </div>
                <!-- End of .row -->
            </div>
            <!-- End of .container -->
        </div>
        <section class="features section-gap" id="cynic-about" data-scroll-offset="165">
            <div class="container">


                    <div class="features-grid">
                        <div class="row align-items-center">
                            <div class="col-lg-5 text-center text-lg-left">
                                <div class="img-container">
                                    <img :src="WebsiteDesign2" alt="Responsive Web Design" class="img-fluid">

                                </div>
                                <!-- End of .img-container -->
                            </div>


                            <div class="col-lg-6 offset-lg-1">
                                <div class="features-content">
                                    <h2 class="section-title">Responsive Mobile Application</h2>
                                    <p class="text-justify">A responsive mobile application is a software application that is designed to adapt and function effectively on a wide range of devices, including smartphones and tablets. These types of applications are becoming increasingly important as more and more people rely on their mobile devices for both personal and professional tasks.</p>



                                        <ul class="feature-list">
                                            <li><i class="far fa-tablet"></i>Ability to adjust to different screen sizes and resolutions.</li>
                                            <li><i class="far fa-laptop"></i>Optimized for touch input.</li>
                                            <li><i class="far fa-desktop-alt"></i>Seamless and enjoyable user experience on a wide range of devices.</li>
                                        </ul>
                                        <!-- End of .feature-list -->



                                </div>
                                <!-- End of .features-content -->
                            </div>

                        </div>
                        <!-- End of .row -->
                    </div>
                    <!-- End of .features-grid -->


            </div>
            <!-- End of .container -->
        </section>

        <section class="our-process section-gap light-grey-bg">
            <div class="container">
                <h2 class="section-title text-center">Our Process</h2>
                <p class="larger-txt text-center">We provide great mobile application that adds great values to your business.</p>

                <div class="process-tab-container grid-wrapper">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="nav nav-pills">

                                    <a class="nav-link active" data-bs-toggle="pill" href="#process-tab-1">
                                        <span>01</span>
                                        Mobile app development
                                        <i class="fal fa-long-arrow-right"></i>
                                    </a>

                                    <!-- <a class="nav-link " data-bs-toggle="pill" href="#process-tab-2">
                                        <span>02</span>
                                        Frontend Development
                                        <i class="fal fa-long-arrow-right"></i>
                                    </a> -->

                                    <a class="nav-link " data-bs-toggle="pill" href="#process-tab-3">
                                        <span>02</span>
                                        Deployment & Support
                                        <i class="fal fa-long-arrow-right"></i>
                                    </a>

                            </div>
                        </div>


                        <div class="col-lg-7">
                            <div class="tab-content">

                                    <div class="tab-pane fade show active" id="process-tab-1">
                                        <div class="img-card process-card">
                                            <img :src="ProcessImg1" alt="..." class="img-fluid small">
                                            <div class="process-card-content">
                                                <h3>Mobile app development</h3>
                                                <p class="text-justify">Mobile app development refers to the process of creating software applications that are designed to run on mobile devices, such as smartphones and tablets. These apps can be native, meaning they are built specifically for a particular platform (such as iOS or Android), or they can be cross-platform, meaning they can be used on multiple platforms.</p>
                                                <p class="text-justify">At CodinMage, we will create mobile application for your company.<br/> Mobile app development can be a complex process, but it can also be a rewarding and exciting way to create innovative solutions for mobile users. </p>
                                            </div>
                                        </div>
                                        <!-- comment -->
                                    </div>

                                    <!-- <div class="tab-pane fade " id="process-tab-2">
                                        <div class="img-card process-card">
                                            <img :src="ProImg02" alt="..." class="img-fluid small">
                                            <div class="process-card-content">
                                                <h3>Frontend Development</h3>
                                                <p class="text-justify" >Frontend development, on the other hand, refers to the development of the client-side of a web application, which is what users see and interact with in their web browsers. It involves the use of HTML, CSS, and JavaScript to build the user interface and create interactive elements on a website.</p>
                                                <p class="text-justify">At CodinMage, we will create client-side of your web application excellently.</p>
                                            </div>
                                        </div>

                                    </div> -->

                                    <div class="tab-pane fade " id="process-tab-3">
                                        <div class="img-card process-card">
                                            <img :src="ProImg03" alt="..." class="img-fluid small">
                                            <div class="process-card-content">
                                                <h3>Deployment & Support</h3>
                                                <p class="text-justify">Both mobile application deployment and support are critical components of the mobile app development process. Without proper deployment and support, an app may not function as intended and may not be used by a large number of users.</p>
                                                <p class="text-justify">At CodinMage, we will deploy your mobile app to Google playstore or IOS appstore.</p>
                                            </div>
                                        </div>
                                        <!-- comment -->
                                    </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <!-- End of .container -->
        </section>




    </main>

</template>


<script setup>
import WebsiteDesign from '@/assets/mobile1.png';
import WebsiteDesign2 from '@/assets/mobile2.png';
import ProcessImg1 from '@/assets/appdev.png'
import ProImg02 from '@/assets/frontend.png';
import ProImg03 from '@/assets/appdeploy.png';
</script>


<style scoped>

.img-fluid.small{
    width: 330px;
    display: inline-flex;
    justify-content: center;
}
</style>
