<template>
    <main>
        <!-- banner starts -->
<div class="banner d-flex align-items-center grey-bg">

    <!-- Breadcrumb starts -->
    <nav class="breadcrumb-wrapper" aria-label="breadcrumb">
        <div class="container">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Blog post</li>
            </ol>
        </div>
    </nav>


    <div class="container">
        <div class="row no-gutters align-items-center">
            <div class="col-lg-6 text-center text-lg-left">
                <h1>Blog Post</h1>
                <p class="larger-txt">Welcome to our software development company's blog, where we unravel the latest tech trends and share expert insights to keep you ahead in the digital world.</p>

            </div>
            <!-- End of .col-lg-5 -->

            <div class="col-lg-6">
                <div class="img-container text-center text-lg-right">
                    <img src="@/assets/banner/news-details-banner.png" alt="Block details banner image" class="img-fluid">
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

<!-- post-details starts -->
<div class="post-details " v-if="data.status">
    <div class="container">
        <div class="row">
            <div class="col-lg">
                <article class="article-details">
                    <figure>
    <img :src="data.post.image.url" alt="Post Details Image" class="img-fluid">

</figure>

<ul class="post-metas ">
    <!-- <li> <a href="#" class=""><img src="@/assets/post-author-1.png" alt="">Jems Anderson</a></li> -->
    <li class=""><a><i class="far fa-calendar-alt"></i>{{ format_date(data.post.createdAt) }}</a></li>
    <li> <a class=""><i class="far fa-tags"></i><span v-if="data.post.tags.length > 0" v-for="tag in data.post.tags" style="margin-right: 20px; text-transform: capitalize;">{{ tag }} </span> <span v-else> #NeerStack </span></a></li>
    <!-- <li> <a href="#" class=""><i class="far fa-bezier-curve"></i>Design</a></li> -->
</ul>

                    <h1>{{ data.post.title }}</h1>
                    <div v-html="data.post.htmlContent" v-if="data.post.htmlContent">
                    </div>
                    <div v-else>
                        <p>{{ data.post.content }}</p>
                    </div>
                </article>
                <!-- End of .article-details -->
            </div>
            <!-- End of .col-lg-4 -->
        </div>
        <!-- End of .row -->
    </div>
    <!-- End of .container -->
</div>
<div class="post-details" v-else>
    <div class="container">
        <div class="row">
            <div class="col-lg">
                <article class="article-details">
                    <div class="col-lg-12 mb-4 mt-2 text-center signuas">
                        <span class="spinner-border spinner-border-lg"></span>
                    </div>
                </article>
            </div>
        </div>
    </div>
</div>

<!-- End of .post-details -->

<!-- Section latest-news starts -->
<section class="latest-news section-gap grey-bg" id="cynic-news" data-scroll-offset="75">
    <div class="container">
        <h2 class="section-title text-center">Related Blog Post</h2>

        <div class="grid-wrapper">
            <div class="row justify-content-center" v-if="data.posts.length > 0">
                <div class="col-lg-4 col-md-6 blog-container"  v-for="(post) in data.posts.slice(0, 3)" :key="post._id">
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

                <!-- <div class="col-lg-12 text-center">
                    <a href="#" class="custom-btn secondary-btn">LOAD MORE NEWS</a>
                </div> -->
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
import {useRoute} from 'nuxt/app'
import dayjs from 'dayjs';
import { useGetPostStore } from '@/store/post';
import { ToastAlert } from '@/utils/SweetAlertUtl';

const route = useRoute()

const data = useGetPostStore()

const slug = route.params.slug
    await data.getBySlug(slug)
    .then(()=>{
        if(!data.status){
            if(data.message){
                ToastAlert(data.message, 'error')
            }else if(data.error){
                ToastAlert(data.error, 'error')
            }
        }
    })

    await data.getActivePosts()

if(data.post){
  useHead({
    title: computed(() => `NeerStack | ${data.post.title}` ),
    description: computed(() => data.post.title),
    keywords: computed(() => data.post.tags),
    meta: [
        {
            hid: 'og:title',
            property: 'og:title',
            content: computed(() => `NeerStack | ${data.post.title}` ),
        },
        {
            hid: 'og:description',
            property: 'og:description',
            content: computed(() => data.post.title),
        },
        {
            hid: 'og:image',
            property: 'og:image',
            content: computed(() => data.post.image.url),
        },
        {
            hid: 'og:url',
            property: 'og:url',
            content: computed(() => `https://neerstack.com/blog/${data.post.slug}`),
        },
        {
            hid: 'twitter:title',
            property: 'twitter:title',
            content: computed(() => `NeerStack | ${data.post.title}` ),
        },
        {
            hid: 'twitter:description',
            property: 'twitter:description',
            content: computed(() => data.post.title),
        },
        {
            hid: 'twitter:image',
            property: 'twitter:image',
            content: computed(() => data.post.image.url),
        },
        {
            hid: 'twitter:url',
            property: 'twitter:url',
            content: computed(() => `https://neerstack.com/blog/${data.post.slug}`),
        },
    ]
}
)
}











const format_date = (value) => {
    if (value) {
     const date = dayjs(value);
    return date.format('dddd MMMM D, YYYY');
    }
}




</script>
