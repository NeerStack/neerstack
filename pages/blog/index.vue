<template>
    <main>
        <!-- banner starts -->
<div class="banner d-flex align-items-center grey-bg">

    <!-- Breadcrumb starts -->
    <nav class="breadcrumb-wrapper" aria-label="breadcrumb">
        <div class="container">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Blog</li>
            </ol>
        </div>
    </nav>


    <div class="container">
        <div class="row no-gutters align-items-center">
            <div class="col-lg-6 text-center text-lg-left">
                <h1>Blog</h1>
                <p class="larger-txt">Welcome to our software development company's blog, where we unravel the latest tech trends and share expert insights to keep you ahead in the digital world.</p>

            </div>
            <!-- End of .col-lg-5 -->

            <div class="col-lg-6">
                <div class="img-container text-center text-lg-right">
                    <img src="@/assets/banner/news-banner.png" alt="Blog banner image" class="img-fluid">
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

<!-- Section latest-news starts -->
<section class="latest-news section-gap" id="cynic-news" data-scroll-offset="75">
    <div class="container">
        <h2 class="section-title text-center">Tech Blogs</h2>

        <div class="grid-wrapper" >
            <div class="row justify-content-center" v-if="data.status == true">
                <div class="col-lg-4 col-md-6 blog-container"  v-for="(post) in data.posts" :key="post._id">
                    <a :href="'/blog/'+post.slug" class="img-card news-card">
                        <img :src="post.image.url" alt="news image" class="img-fluid">
                        <div class="content ">
                            <h4>{{format_date(post.createdAt)}}
                                <span>{{ post.title }}</span>
                            </h4>

                        </div>

                    </a>
                    <!-- End of .img-card -->
                </div>
                <!-- End of .col-lg-4 -->

                <div class="col-lg-12 text-center">
                    <a href="#" class="custom-btn secondary-btn">LOAD MORE NEWS</a>
                </div>
                <!-- End of .text-center -->
            </div>
            <div class="row justify-content-center" v-else>
                <div>
                    <h3>No blogs available at the moment</h3>
                </div>
            </div>
            <!-- End of .row -->

        </div>
        <!-- End of .grid-wrapper -->
    </div>
    <!-- End of .container -->
</section>
<!-- End of .latest-news -->

    </main>
</template>
<script setup>
import { useGetPostStore } from '@/store/post';
import dayjs from 'dayjs';

useHead({
    title: computed(() => `NeerStack | Blog`),
})


const format_date = (value) => {
    if (value) {
     const date = dayjs(value);
    return date.format('dddd MMMM D, YYYY');
    }
}

const data = useGetPostStore();

onMounted(() => {
    data.getActivePosts();
});

</script>
