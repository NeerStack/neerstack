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
                <p class="smaller-txt">Our software development company's blog offers expert insights and explores the latest tech trends to keep you ahead in the digital world.</p>

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
                <div class="col-lg-4 col-md-6 blog-container"  v-for="(post) in data.searchState" :key="post._id">
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

                <div class="col-md-12 text-center paginationSection" v-if="data.posts.length > data.size">
                    <button v-if="data.current_page > 1" @click="data.prevPage" class="arrows">
                    <i class="bi bi-arrow-left-circle-fill"></i>
                    </button>
                    <!-- <button v-if="(data.posts.length>0)" class="btnButton active">{{data.current_page}}</button> -->
                    <button v-if="(data.current_page*size) < data.posts.length" @click="data.nextPage" class="arrows">
                    <i class="bi bi-arrow-right-circle-fill"></i>
                    </button>
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
<style scoped>
.paginationSection{
  margin-top: 35px !important;
  margin-bottom: 35px !important;
}

.paginationSection .arrows{
  background-color: transparent !important;
  border: none !important;
  position: relative !important;
  top: 5px !important;
}

.paginationSection .arrows i{
  font-size: 30px !important;
  color: #979797 !important;
  padding-left: 10px !important;
  padding-right: 10px !important;
}

.paginationSection .btnButton{
  width: 30px !important;
  height: 30px !important;
  line-height: 30px !important;
  font-size: 16px !important;
  color: #fff !important;
  background-color: #87ec90 !important;
  border: none !important;
  border-radius: 5px !important;
  margin-left: 9px !important;
  margin-right: 9px !important;
}

.paginationSection button.active{
  background-color: #000 !important;
  color: #fff !important;
}
</style>
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
