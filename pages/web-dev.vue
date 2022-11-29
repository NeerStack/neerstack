<template>
    <main>
        <div class="banner d-flex align-items-center light-grey-bg">
    
            <!-- Breadcrumb starts -->
            <nav class="breadcrumb-wrapper" aria-label="breadcrumb">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Website Development</li>
                    </ol>
                </div>
            </nav>
            
        
            <div class="container">
                <div class="row no-gutters align-items-center">
                    <div class="col-lg-6 text-center text-lg-left">
                        <h1>Website Development</h1>
                        <p class="larger-txt">What makes a company great? That’s simple. It’s the <br>people who work here.</p>
                        
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
                                    <img :src="WebsiteDesign" alt="Responsive Web Design" class="img-fluid">
                                    
                                </div>
                                <!-- End of .img-container -->
                            </div>
                            
        
                            <div class="col-lg-6 offset-lg-1">
                                <div class="features-content">
                                    <h2 class="section-title">Responsive Website Development</h2>
                                    <p>Aenean consectetur massa quis sem volutpat, a condimentum tortor pretium. Cras id ligula consequat, sagittis nulla at, sollicitudin lorem. Orci varius natoque penatibus et magnis dis parturient.</p>
                                    
        
                                    
                                        <ul class="feature-list">
                                            <li><i class="far fa-tablet"></i>One design for your desktop, tab and mobile.</li>
                                            <li><i class="far fa-laptop"></i>Beautiful and modern design that makes difference.</li>
                                            <li><i class="far fa-desktop-alt"></i>Boost your sales with strategically built user experience.</li>
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
                                
                                    <a class="nav-link active" data-bs-toggle="pill" href="#process-tab-1">
                                        <span>01</span>
                                         Consultation
                                        <i class="fal fa-long-arrow-right"></i>
                                    </a>
                                
                                    <a class="nav-link " data-bs-toggle="pill" href="#process-tab-2">
                                        <span>02</span>
                                        Development
                                        <i class="fal fa-long-arrow-right"></i>
                                    </a>
                                
                                    <a class="nav-link " data-bs-toggle="pill" href="#process-tab-3">
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
                                            <img :src="ProcessImg1" alt="..." class="img-fluid">
                                            <div class="process-card-content">
                                                <h3>Consultation</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt the laoreet dolore magna aliquam erat volutpat.</p>
                                                <p>Ut wisi enim ad minim veniam. Quis nostrud exerci tation ullam corper suscipit lobortis nisl ut aliquip ex eading.</p>
                                            </div>
                                        </div>
                                        <!-- comment -->
                                    </div>
                                
                                    <div class="tab-pane fade " id="process-tab-2">
                                        <div class="img-card process-card">
                                            <img :src="ProImg02" alt="..." class="img-fluid">
                                            <div class="process-card-content">
                                                <h3>Development</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt the laoreet dolore magna aliquam erat volutpat.</p>
                                                
                                            </div>
                                        </div>
                                        <!-- comment -->
                                    </div>
                                
                                    <div class="tab-pane fade " id="process-tab-3">
                                        <div class="img-card process-card">
                                            <img :src="ProImg03" alt="..." class="img-fluid">
                                            <div class="process-card-content">
                                                <h3>Deployment</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid unt the laoreet dolore magna aliquam erat volutpat.</p>
                                                <p>Ut wisi enim ad minim veniam.</p>
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
import WebsiteDesign from '@/assets/website-design-banner.png';
import ProcessImg1 from '@/assets/process-img-1.png'
import ProImg02 from '@/assets/process-img-2.png';
import ProImg03 from '@/assets/process-img-3.png';
</script>
<!-- <style scoped>
main{
    margin-top: 180px;
    margin-bottom: 180px;
}
</style> -->