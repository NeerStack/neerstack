<template>

    <main>
        <div class="banner d-flex align-items-center grey-bg">

            <!-- Breadcrumb starts -->
            <nav class="breadcrumb-wrapper mb-20" aria-label="breadcrumb">
                <div class="container">
                    <ol class="breadcrumb mb-20">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Product Management</li>
                    </ol>
                </div>
            </nav>


            <div class="container  mt-10 mb-20">
                <div class="row no-gutters align-items-center">
                    <div class="col-lg-6  text-center text-lg-left">
                        <h1 class="mt-20">Product Management</h1>
                        <p class="smaller-txt text-justify">Product management is the process of defining, implementing, and executing an effective product strategy. Product thinking covers what to build, when to build it and how to build it. It encompasses the entire lifecycle of a product, from ideation to development through go-to-market steps from customer interactions and sales channel solutions. Product management is a key part of any new product development lifecycle.</p>

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
                                    <h2 class="section-title">Excellent Product Management</h2>
                                    <p class="text-justify">The professional in product management implements strategies to bring products and services looking for market fit to market by any means, as well as assimilating these strategies following circumstances of the market. Strategies include either special investment in marketing plan or the applications of the principle of "product life cycle".</p>



                                        <ul class="feature-list">
                                            <li><i class="far fa-tablet"></i>Requirement analysis.</li>
                                            <li><i class="far fa-laptop"></i>Marketing and sales promotion.</li>
                                            <li><i class="far fa-desktop-alt"></i>Post sale services and improvements.</li>
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

        <section class="our-process section-gap grey-bg">
            <div class="container">
                <h2 class="section-title text-center">Our Process</h2>
                <p class="larger-txt text-center">We provide great product management that contributes to your business.</p>

                <div class="process-tab-container grid-wrapper">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="nav nav-pills">

                                    <a class="nav-link active" data-bs-toggle="pill" data-bs-target="#process-tab-1" href="#">
                                        <span>01</span>
                                         Product Management
                                        <i class="fal fa-long-arrow-right"></i>
                                    </a>

                                    <!-- <a class="nav-link " data-bs-toggle="pill" href="#process-tab-2">
                                        <span>02</span>
                                        Frontend Development
                                        <i class="fal fa-long-arrow-right"></i>
                                    </a> -->

                                     <!-- <a class="nav-link " data-bs-toggle="pill" href="#process-tab-3">
                                        <span>02</span>
                                        Deployment & Support
                                        <i class="fal fa-long-arrow-right"></i>
                                    </a> -->

                            </div>
                        </div>


                        <div class="col-lg-7">
                            <div class="tab-content">

                                    <div class="tab-pane fade show active" id="process-tab-1">
                                        <div class="img-card process-card">
                                            <img :src="ProcessImg1" alt="..." class="img-fluid small">
                                            <div class="process-card-content">
                                                <h3>Product Management</h3>
                                                <p class="text-justify">Product management is the process of defining, implementing, and executing an effective product strategy. Product thinking covers what to build, when to build it and how to build it. It encompasses the entire lifecycle of a product, from ideation to development through go-to-market steps from customer interactions and sales channel solutions.</p>
                                                <p class="text-justify">At NeerStack, we will manage your product for you.<br/> Successfully managing a product requires so much more than just technical competency. That's why this course is designed to provide a blueprint on integrating management with technology. </p>
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
                                                <p class="text-justify">At NeerStack, we will create client-side of your web application excellently.</p>
                                            </div>
                                        </div>

                                    </div> -->

                                    <!-- <div class="tab-pane fade " id="process-tab-3">
                                        <div class="img-card process-card">
                                            <img :src="ProImg03" alt="..." class="img-fluid small">
                                            <div class="process-card-content">
                                                <h3>Deployment & Support</h3>
                                                <p class="text-justify">Both mobile application deployment and support are critical components of the mobile app development process. Without proper deployment and support, an app may not function as intended and may not be used by a large number of users.</p>
                                                <p class="text-justify">At NeerStack, we will deploy your mobile app to Google playstore or IOS appstore.</p>
                                            </div>
                                        </div>

                                    </div> -->

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
import WebsiteDesign from '@/assets/manage1.png';
import WebsiteDesign2 from '@/assets/manage2.png';
import ProcessImg1 from '@/assets/manage3.png'
// import ProImg02 from '@/assets/frontend.png';
// import ProImg03 from '@/assets/appdeploy.png';

const setdata = {
    title: "NeerStack | Product Management"
}

useHead({
    title: computed(() => setdata.title)
})

</script>


<style scoped>

.img-fluid.small{
    width: 330px;
    display: inline-flex;
    justify-content: center;
}
</style>

