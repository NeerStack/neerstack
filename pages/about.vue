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
                <p class="smaller-txt text-justify">At NeerStack, we're not just another web development agency. We are your trusted partner, your digital ally, and your dedicated team of experts committed to delivering exceptional web solutions tailored to your unique needs.</p>

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
<section class="features section-gap " id="cynic-about" data-scroll-offset="165">
    <div class="container">

        <div class="features-grid">
                <div class="row align-items-center">
                    <div class="col-lg-6 order-lg-2 offset-lg-1 text-center text-lg-right">
                        <div class="img-container">
                            <img :src="featuresImg4" alt="Who We Are" class="img-fluid">

                        </div>
                        <!-- End of .img-container -->
                    </div>
                    <!-- End of .col-lg-6 -->

                    <div class="col-lg-5 ">
                        <div class="features-content">
                            <h2 class="section-title">👤 Who We Are</h2>
                            <p >We are a passionate and forward-thinking team of web development professionals, driven by the desire to transform your digital aspirations into reality. With years of industry experience, our team is well-versed in the ever-evolving landscape of web technologies.</p>
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
                            <img :src="featuresImg1" alt="why choose us" class="img-fluid">

                        </div>
                        <!-- End of .img-container -->
                    </div>
                    <!-- End of .col-lg-6 -->

                    <div class="col-lg-5 offset-lg-1">
                        <div class="features-content">
                            <h2 class="section-title">🌐 Our Mission</h2>
                            <p >Our mission is simple but powerful: to empower businesses of all sizes with cutting-edge web solutions that drive growth, enhance user experiences, and amplify online presence. We believe that a well-crafted website is more than just a digital presence; it's a strategic asset that can unlock limitless potential.
                    </p>
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
                            <img :src="featuresImg2" alt="What Sets Us Apart" class="img-fluid">

                        </div>
                        <!-- End of .img-container -->
                    </div>
                    <!-- End of .col-lg-6 -->

                    <div class="col-lg-5">
                        <div class="features-content">
                            <h2 class="section-title">💡 What Sets Us Apart</h2>

                            <ul>
                        <li>
                            <p><span>Expertise:</span> Our team comprises seasoned software engineers and developers with a deep understanding of the digital realm. We stay ahead of the curve, continually updating our skills to leverage the latest trends and technologies.</p>
                        </li>
                        <li>
                            <p><span>Tailored Solutions:</span> We recognize that every business is unique. That's why we take a customized approach to every project, ensuring that your web solution aligns perfectly with your goals and audience.</p>
                        </li>
                        <li>
                            <p><span>Client-Centric Approach: </span> We value your input and feedback at every stage of the development process. Your satisfaction is our priority, and we're committed to open and transparent communication.</p>
                        </li>
                        <li>
                            <p><span>Results-Driven:</span> We don't just build websites; we build solutions that deliver tangible results. From enhanced user engagement to increased conversions, we measure success by the impact our work has on your business.</p>
                        </li>
                        <li>
                            <p><span>Security and Reliability:</span> Trust is paramount in the digital world. We prioritize the security and reliability of your web solutions, so you can focus on running your business with confidence.</p>
                        </li>
                        <li>
                            <p><span>Global Perspective:</span> In an interconnected world, we understand the importance of thinking globally. Our team's diverse backgrounds enable us to create web solutions that resonate with a wide range of audiences.</p>
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
                    <div class="col-lg-6 text-center text-lg-left">
                        <div class="img-container">
                            <img :src="featuresImg3" alt="Let's Collaborate" class="img-fluid">

                        </div>
                        <!-- End of .img-container -->
                    </div>
                    <!-- End of .col-lg-6 -->

                    <div class="col-lg-5 offset-lg-1">
                        <div class="features-content">
                            <h2 class="section-title">🤝 Let's Collaborate</h2>
                            <p>We believe that great web development is a collaborative effort, and we're excited to embark on this journey with you. Whether you're a startup looking for a stunning online debut or an established enterprise seeking to revamp your digital presence, we're here to make it happen.</p>
                            <p>Ready to take your web presence to new heights? Contact us today, and let's discuss how we can turn your web development dreams into a reality. Join hands with [Your Company Name], where innovation meets excellence. Your success is our business!</p>
                            <p>
                                 <a class="hyperlink" href="/contact-us">Contact us today!</a>
                            </p>

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
    import featuresImg4 from '@/assets/features/features-img-9.png'

    const setdata = {
    title: "NeerStack | About"
}
useHead({
    title: computed(() => setdata.title)
})
</script>
