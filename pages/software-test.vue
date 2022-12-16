<template>

    <main>
        <div class="banner d-flex align-items-center light-grey-bg">

            <!-- Breadcrumb starts -->
            <nav class="breadcrumb-wrapper mb-20" aria-label="breadcrumb">
                <div class="container">
                    <ol class="breadcrumb mb-20">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Software Testing</li>
                    </ol>
                </div>
            </nav>


            <div class="container  mt-10 mb-20">
                <div class="row no-gutters align-items-center">
                    <div class="col-lg-6  text-center text-lg-left">
                        <h1 class="mt-20">Software Testing</h1>
                        <p class="larger-txt text-justify">Software testing is the process of evaluating a software system or its component(s) with the intent to find whether it satisfies the specified requirements or not. Testing is the process of verifying and validating that a software system or its components are working as expected. It is an important step in the software development process as it helps identify defects, bugs, and issues in the software system.</p>

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
                                    <h2 class="section-title">Excellent Software Testing</h2>
                                    <p class="text-justify">Software testing is the process of examining a software program or application, as well as its associated test data, and determining if a particular test has passed. Software testing examines the artifacts and behavior of the software under test and ensures that it conforms to the intended specifications. Software testing is an important part of the software development process as it helps to ensure that the software is of high quality and meets the specified requirements.</p>



                                        <ul class="feature-list">
                                            <li><i class="far fa-tablet"></i>Ensuring that the software is reliable.</li>
                                            <li><i class="far fa-laptop"></i>Ensuring that the software is efficient.</li>
                                            <li><i class="far fa-desktop-alt"></i>Ensuring that the software is effective.</li>
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
                <p class="larger-txt text-center">We provide software testing for your application.</p>

                <div class="process-tab-container grid-wrapper">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="nav nav-pills">

                                    <a class="nav-link active" data-bs-toggle="pill" href="#process-tab-1">
                                        <span>01</span>
                                        Unit testing
                                        <i class="fal fa-long-arrow-right"></i>
                                    </a>

                                    <a class="nav-link " data-bs-toggle="pill" href="#process-tab-2">
                                        <span>02</span>
                                        Integration testing
                                        <i class="fal fa-long-arrow-right"></i>
                                    </a>

                                     <a class="nav-link " data-bs-toggle="pill" href="#process-tab-3">
                                        <span>03</span>
                                        System testing
                                        <i class="fal fa-long-arrow-right"></i>
                                    </a>
                                    <a class="nav-link " data-bs-toggle="pill" href="#process-tab-4">
                                        <span>04</span>
                                        Acceptance testing
                                        <i class="fal fa-long-arrow-right"></i>
                                    </a>
                                    <a class="nav-link " data-bs-toggle="pill" href="#process-tab-5">
                                        <span>05</span>
                                        Performance testing
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
                                                <h3>Unit testing</h3>
                                                <p class="text-justify">This is the testing of individual units or components of the software. It is usually done by developers as part of the development process to ensure that each unit is working as intended.</p>

                                            </div>
                                        </div>
                                        <!-- comment -->
                                    </div>

                                    <div class="tab-pane fade " id="process-tab-2">
                                        <div class="img-card process-card">
                                            <img :src="ProImg02" alt="..." class="img-fluid small">
                                            <div class="process-card-content">
                                                <h3>Integration testing</h3>
                                                <p class="text-justify" >This is the testing of how different units of the software work together. It helps to identify defects that may occur when different units are combined.</p>

                                            </div>
                                        </div>

                                    </div>

                                    <div class="tab-pane fade " id="process-tab-3">
                                        <div class="img-card process-card">
                                            <img :src="ProImg03" alt="..." class="img-fluid small">
                                            <div class="process-card-content">
                                                <h3>System testing</h3>
                                                <p class="text-justify">This is the testing of the entire software system to ensure it meets the specified requirements. It is usually done after integration testing and involves testing the system as a whole.</p>

                                            </div>
                                        </div>

                                    </div>
                                    <div class="tab-pane fade " id="process-tab-4">
                                        <div class="img-card process-card">
                                            <img :src="ProImg04" alt="..." class="img-fluid small">
                                            <div class="process-card-content">
                                                <h3>Acceptance testing</h3>
                                                <p class="text-justify">This is the testing of the software by the customer or end-user to determine whether it meets their needs and requirements.</p>

                                            </div>
                                        </div>

                                    </div>
                                    <div class="tab-pane fade " id="process-tab-5">
                                        <div class="img-card process-card">
                                            <img :src="ProImg05" alt="..." class="img-fluid small">
                                            <div class="process-card-content">
                                                <h3>Performance testing</h3>
                                                <p class="text-justify">This is the testing of the software to ensure it performs efficiently and effectively under different conditions, such as high load or stress.</p>

                                            </div>
                                        </div>

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
import WebsiteDesign from '@/assets/test1.png';
import WebsiteDesign2 from '@/assets/test2.png';
import ProcessImg1 from '@/assets/test3.png'
import ProImg02 from '@/assets/test4.png';
import ProImg03 from '@/assets/test5.png';
import ProImg04 from '@/assets/test6.png';
import ProImg05 from '@/assets/test7.png';
</script>


<style scoped>

.img-fluid.small{
    width: 330px;
    display: inline-flex;
    justify-content: center;
}
</style>
