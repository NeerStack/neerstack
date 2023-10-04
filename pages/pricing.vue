<template>
   <main>
        <!-- banner starts -->
<div class="banner d-flex align-items-center grey-bg">

    <!-- Breadcrumb starts -->
    <nav class="breadcrumb-wrapper" aria-label="breadcrumb">
        <div class="container">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Pricing Plans</li>
            </ol>
        </div>
    </nav>


    <div class="container">
        <div class="row no-gutters align-items-center">
            <div class="col-lg-6 text-center text-lg-left">
                <h1>Pricing Plans</h1>
                <p class="smaller-txt">Based on market demand, we have created 3 packages <br>that will cover all your business needs.</p>

            </div>
            <!-- End of .col-lg-5 -->

            <div class="col-lg-6">
                <div class="img-container text-center text-lg-right">
                    <img src="@/assets/banner/pricing-banner.png" alt="Pricing banner image" class="img-fluid">
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

<section class="pricing section-gap " id="cynic-pricing" data-scroll-offset="75" data-scroll-offset-mobile="75">
    <div class="container">
        <h2 class="section-title text-center">Pricing Plans for Businesses of All Sizes</h2>
        <p class="larger-txt text-center">Nulla venenatis enim vel eros blandit, sed dignissim risus porta. Nullam
            eget erat pulvinar.</p>
        <div class="grid-wrapper pricing-grid-wrapper">
            <div class="row align-items-center no-gutters">
                <div class="col-xl-6">
                    <div class="pricing-group">
                        <div class="group-title text-center">
                            FOR STARTUPS
                        </div>
                        <!-- End of .group-title -->
                        <div class="row no-gutters">
                            <div class="col-md-6">
                                <div class="pricing-block text-center  ">
    <h3 class="pricing-level">
        Basic
    </h3>
    <div class="price">
        <sup>$</sup>9
        <sub>/mo</sub>
    </div>
    <!-- End of .price -->

    <div class="facilities text-left">

            <div>
                <i class="far fa-envelope-open-text"></i>
                Unlimited Projects
            </div>

            <div>
                <i class="far fa-user-headset"></i>
                Everyday Support
            </div>

    </div>
    <!-- End of .facilities -->
    <a href="#"
        class="custom-btn secondary-btn">PURCHASE NOW</a>
</div>
<!-- End of .pricing-block -->
                            </div>
                            <!-- End of .col-md-6 -->

                            <div class="col-md-6">
                                <div class="pricing-block text-center  ">
    <h3 class="pricing-level">
        Middle
    </h3>
    <div class="price">
        <sup>$</sup>29
        <sub>/mo</sub>
    </div>
    <!-- End of .price -->

    <div class="facilities text-left">

            <div>
                <i class="far fa-envelope-open-text"></i>
                Unlimited Projects
            </div>

            <div>
                <i class="far fa-user-headset"></i>
                Everyday Support
            </div>

            <div>
                <i class="far fa-cloud-upload"></i>
                Monthly Updates
            </div>

    </div>
    <!-- End of .facilities -->
    <a href="#"
        class="custom-btn secondary-btn">PURCHASE NOW</a>
</div>
<!-- End of .pricing-block -->
                            </div>
                            <!-- End of .col-md-6 -->
                        </div>
                        <!-- End of .row -->
                    </div>
                    <!-- End of .pricing-group -->
                </div>
                <!-- End of .col-lg-6 -->

                <div class="col-xl-6">
                    <div class="pricing-group">
                        <div class="group-title text-center">
                            FOR BUSINESS
                        </div>
                        <!-- End of .group-title -->
                        <div class="row no-gutters">
                            <div class="col-md-6">
                                <div class="pricing-block text-center  active">
    <h3 class="pricing-level">
        Pro
    </h3>
    <div class="price">
        <sup>$</sup>49
        <sub>/mo</sub>
    </div>
    <!-- End of .price -->

    <div class="facilities text-left">

            <div>
                <i class="far fa-envelope-open-text"></i>
                Unlimited Projects
            </div>

            <div>
                <i class="far fa-user-headset"></i>
                Everyday Support
            </div>

            <div>
                <i class="far fa-cloud-upload"></i>
                Monthly Updates
            </div>

            <div>
                <i class="far fa-user"></i>
                Free Domain
            </div>

    </div>
    <!-- End of .facilities -->
    <a href="#"
        class="custom-btn primary-btn">PURCHASE NOW</a>
</div>
<!-- End of .pricing-block -->
                            </div>
                            <!-- End of .col-md-6 -->

                            <div class="col-md-6">
                                <div class="pricing-block text-center  ">
    <h3 class="pricing-level">
        King
    </h3>
    <div class="price">
        <sup>$</sup>99
        <sub>/mo</sub>
    </div>
    <!-- End of .price -->

    <div class="facilities text-left">

            <div>
                <i class="far fa-envelope-open-text"></i>
                Unlimited Projects
            </div>

            <div>
                <i class="far fa-user-headset"></i>
                Everyday Support
            </div>

            <div>
                <i class="far fa-cloud-upload"></i>
                Monthly Updates
            </div>

            <div>
                <i class="far fa-user"></i>
                Free Domain
            </div>

            <div>
                <i class="far fa-file"></i>
                Privacy
            </div>

    </div>
    <!-- End of .facilities -->
    <a href="#"
        class="custom-btn secondary-btn">PURCHASE NOW</a>
</div>
<!-- End of .pricing-block -->
                            </div>
                            <!-- End of .col-md-6 -->
                        </div>
                        <!-- End of .row -->
                    </div>
                    <!-- End of .pricing-group -->
                </div>
                <!-- End of .col-lg-6 -->
            </div>
            <!-- End of . -->
        </div>
        <!-- End of .grid-wrapper -->
    </div>
    <!-- End of .container -->
</section>
   </main>
</template>
<script setup>
import under from '@/assets/under-construction.png'
const setdata = {
    title: "NeerStack | Pricing"
}
useHead({
    title: computed(() => setdata.title)
})

</script>
<style lang="scss">
    .construct{
        margin-top: 190px;
        h1{
            font-size: calc(80px);
            font-weight: bolder;
        }
        img{
            display: inline-flex;
            justify-content: center;
            width: 1000px;
            margin-top: 6%;
            margin-bottom: 50px;
        }
    }
</style>
