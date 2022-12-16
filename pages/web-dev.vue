<template>
    <main>
        <div class="banner d-flex align-items-center light-grey-bg">

            <!-- Breadcrumb starts -->
            <nav class="breadcrumb-wrapper mb-20" aria-label="breadcrumb">
                <div class="container">
                    <ol class="breadcrumb mb-20">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Website Development</li>
                    </ol>
                </div>
            </nav>


            <div class="container  mt-10 mb-20">
                <div class="row no-gutters align-items-center">
                    <div class="col-lg-6  text-center text-lg-left">
                        <h1 class="mt-20">Website Development</h1>
                        <p class="larger-txt text-justify">Website development, which is typically used to refer to the actual creation and programming of websites, is closely tied to the task of developing the features and functionality of websites. Consider all the websites you have used over the years. Web developers created those sites, ensuring that they worked properly and provided a wonderful user experience. Depending on the activities they are carrying out and the platforms they are working on, web developers use different programming languages to write lines of code.</p>

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
                                    <h2 class="section-title">Responsive Website</h2>
                                    <p class="text-justify">A responsive website is a type of website that adjusts its layout and content to fit the size and orientation of the device it is being viewed on. This leads to a better user experience and can improve search engine rankings, while also being cost-effective compared to maintaining a separate mobile website.</p>



                                        <ul class="feature-list">
                                            <li><i class="far fa-tablet"></i>Improved user experience.</li>
                                            <li><i class="far fa-laptop"></i>Better search engine ranking.</li>
                                            <li><i class="far fa-desktop-alt"></i>Cost-effective.</li>
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
                <p class="larger-txt text-center">We provide great websites that adds great values to your business. From developing to
                    <br>hosting and maintaining, we do it all.</p>

                <div class="process-tab-container grid-wrapper">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="nav nav-pills">

                                    <a class="nav-link active" data-bs-toggle="pill" data-bs-target="#process-tab-1" href="#">
                                        <span>01</span>
                                         Backend Development
                                        <i class="fal fa-long-arrow-right"></i>
                                    </a>

                                    <a class="nav-link " data-bs-toggle="pill" data-bs-target="#process-tab-2" href="#">
                                        <span>02</span>
                                        Frontend Development
                                        <i class="fal fa-long-arrow-right"></i>
                                    </a>

                                    <a class="nav-link " data-bs-toggle="pill" data-bs-target="#process-tab-3" href="#">
                                        <span>03</span>
                                        Deployment
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
                                                <h3>Backend Development</h3>
                                                <p class="text-justify">Backend development refers to the development of the server-side of a web application, which includes the database, server, and application logic. It is responsible for managing data, performing calculations, and interacting with other systems.</p>
                                                <p class="text-justify">At CodinMage, we will create server-side API for both your website and mobile application.</p>
                                            </div>
                                        </div>
                                        <!-- comment -->
                                    </div>

                                    <div class="tab-pane fade " id="process-tab-2">
                                        <div class="img-card process-card">
                                            <img :src="ProImg02" alt="..." class="img-fluid small">
                                            <div class="process-card-content">
                                                <h3>Frontend Development</h3>
                                                <p class="text-justify" >Frontend development, on the other hand, refers to the development of the client-side of a web application, which is what users see and interact with in their web browsers. It involves the use of HTML, CSS, and JavaScript to build the user interface and create interactive elements on a website.</p>
                                                <p class="text-justify">At CodinMage, we will create client-side of your web application excellently.</p>
                                            </div>
                                        </div>
                                        <!-- comment -->
                                    </div>

                                    <div class="tab-pane fade " id="process-tab-3">
                                        <div class="img-card process-card">
                                            <img :src="ProImg03" alt="..." class="img-fluid small">
                                            <div class="process-card-content">
                                                <h3>Deployment</h3>
                                                <p class="text-justify">Website deployment is the process of making a website accessible to the public via the internet. This typically involves uploading the website's files to a web server and configuring the server to serve the website to visitors.</p>
                                                <p class="text-justify">At CodinMage, we will deploy your website in any hosting provider of your choice and we will give different options to select from e.g. Heroku, Hostlinger, NameCheap, Digital Oceans e.t.c.</p>
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
import WebsiteDesign from '@/assets/webdev1.png';
import WebsiteDesign2 from '@/assets/webdev2.png';
import ProcessImg1 from '@/assets/Backend.png'
import ProImg02 from '@/assets/frontend.png';
import ProImg03 from '@/assets/deploy.png';
</script>
<!-- <style scoped>
main{
    margin-top: 180px;
    margin-bottom: 180px;
}
</style> -->

<style scoped>

.img-fluid.small{
    width: 332px;
    display: inline-flex;
    justify-content: center;
}
</style>
