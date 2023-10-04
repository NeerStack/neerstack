<template>
    <main>
        <div class="banner d-flex align-items-center grey-bg">

            <!-- Breadcrumb starts -->
            <nav class="breadcrumb-wrapper mb-20" aria-label="breadcrumb">
                <div class="container">
                    <ol class="breadcrumb mb-20">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">UI/UX Design</li>
                    </ol>
                </div>
            </nav>


            <div class="container mt-10 mb-20">
                <div class="row no-gutters align-items-center">
                    <div class="col-lg-6 text-center text-lg-left">
                        <h1>UI/UX Design</h1>
                        <p class="smaller-txt text-justify">The goal of a good user interface is to make using a computer easy and enjoyable for the user. A good user experience design incorporates hardware and software to make user interactions and UI easy and effective.</p>

                    </div>


                    <div class="col-lg-6">
                        <div class="img-container text-center text-lg-right">
                            <img :src="WebsiteDesign2" alt="Banner image" class="img-fluid">
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
                                    <img :src="WebsiteDesign" alt="Responsive Web Design" class="img-fluid">

                                </div>
                                <!-- End of .img-container -->
                            </div>


                            <div class="col-lg-6 offset-lg-1">
                                <div class="features-content">
                                    <h2 class="section-title">Responsive Design</h2>
                                    <p class="text-justify">Technologies have become so advanced that they have the potential to revolutionize every aspect of our daily lives. Although these technologies have immense potential, they also come with a slew of complications if their interfaces are designed poorly. A poorly designed user interface will make using a computer difficult and frustrating for the user.</p>



                                        <ul class="feature-list">
                                            <li class="text-left"><i class="far fa-tablet"></i>One design for your desktop, tab and mobile.</li>
                                            <li class="text-left"><i class="far fa-laptop"></i>Beautiful and modern design that makes difference.</li>
                                            <li class="text-left"><i class="far fa-desktop-alt"></i>Boost your sales with strategically built user experience.</li>
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
                <p class="larger-txt text-center">We provide great websites that adds great values to your business. From wire-framing to
                    <br>PSD designing, we do it all.</p>

                <div class="process-tab-container grid-wrapper">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="nav nav-pills">

                                    <a class="nav-link active" data-bs-toggle="pill" data-bs-target="#process-tab-1" href="#">
                                        <span>01</span>
                                         Consultation
                                        <i class="fal fa-long-arrow-right"></i>
                                    </a>

                                    <a class="nav-link " data-bs-toggle="pill" data-bs-target="#process-tab-2" href="#">
                                        <span>02</span>
                                        Wire-framing
                                        <i class="fal fa-long-arrow-right"></i>
                                    </a>

                                    <a class="nav-link " data-bs-toggle="pill" data-bs-target="#process-tab-3" href="#">
                                        <span>03</span>
                                        Final Design
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
                                                <h3>Consultation</h3>
                                                <p class="text-justify">The first step in creating a <strong>GREAT</strong> user interface and user experience is by understand the project fully, at NeerStack we will organise a session with the client to get full understand of the project and derive a comprehensive documentation from it.</p>
                                            </div>
                                        </div>
                                        <!-- comment -->
                                    </div>

                                    <div class="tab-pane fade " id="process-tab-2">
                                        <div class="img-card process-card">
                                            <img :src="ProImg02" alt="..." class="img-fluid small">
                                            <div class="process-card-content">
                                                <h3>Wire-Framing</h3>
                                                <p class="text-justify">This documentaton gotten from the consulation(s) is now used to generate a project struture that describes the path to each sections of the project and it will be passed on to the client to verify and sign off</p>

                                            </div>
                                        </div>
                                        <!-- comment -->
                                    </div>

                                    <div class="tab-pane fade " id="process-tab-3">
                                        <div class="img-card process-card">
                                            <img :src="ProImg03" alt="..." class="img-fluid small">
                                            <div class="process-card-content">
                                                <h3>Final Design</h3>
                                                <p class="text-justify">This will content teh actual user interface based teh documentation gotten from the documentation and following the process/path of the wire-frame.</p>
                                                <p>This is what the users see and interacts with.</p>
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
import WebsiteDesign from '@/assets/UI_1.png';
import WebsiteDesign2 from '@/assets/UI_2.png';
import ProcessImg1 from '@/assets/Consulting.png'
import ProImg02 from '@/assets/Wireframing.png';
import ProImg03 from '@/assets/final-design.png';
/* import FeaturesImg3 from '@assets/features-img-3.png' */

const setdata = {
    title: "NeerStack | UI/UX Design"
}
useHead({
    title: computed(() => setdata.title)
})

</script>


<style scoped>

.img-fluid.small{
    width: 332px;
    display: inline-flex;
    justify-content: center;
}
</style>
