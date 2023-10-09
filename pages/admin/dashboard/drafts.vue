<template>
    <main class="draftPosts">
        <logo/>
        <body >
            <div v-if="posts">
                <div class="submit">
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css">
                    <input type="text" v-model="search" placeholder="&#xF002; Search" style="font-family: Arial, 'Font Awesome 5 Free'"/>
                </div>
            <div class="table" v-if="posts.posts.length > 0" >

                <table>
                <thead>
                    <tr>
                        <th> S/N </th>
                        <th> Post Title</th>
                        <th>tags</th>
                        <th> Created At</th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="posts.posts" v-for="(post, index) in posts.posts" :key="post._id">
                        <td class="sn"><div style="width: 5px">{{index+1}}</div> </td>
                        <td><div style="width: 200px">{{post.title}}</div> </td>
                        <td>
                            <div style="width: 200px">
                                <span v-if="post.tags.length > 0" v-for="(tag, index) in post.tags" :key="index" style="margin-right: 5px; background-color: #ddd; padding: 5px; border-radius: 5px;">{{tag}}</span>
                                <span v-else><p>No tags found</p></span>
                            </div>
                        </td>
                        <td><div style="width: 170px">{{format_date(post.createdAt)}}</div></td>
                        <td class="action">
                            <NuxtLink :to="'/admin/dashboard/editPost/'+post._id" >
                                <span class="material-icons">edit_note</span>
                            </NuxtLink>
                            <button @click="deletePost(post._id)">
                                <span class="material-icons">delete</span>
                            </button>

                        </td>
                    </tr>
                </tbody>

                </table>
            </div>
            <div v-else>
                <div>
                    <h1> No Drafted Posts </h1>
                </div>
            </div>
            <div class="recentDiv">
                <p style="float: right;margin-top: 20px;">
                  <button v-if="posts.current_page > 1" @click="posts.prevPage" class="prev" >Previous</button>
                  <button v-if="(posts.current_page * posts.size) < posts.posts.length" @click="posts.nextPage" class="next">Next</button>
                </p>
            </div>
            </div>
            <div class="card" v-else>
                <img  src="@/assets/loading.gif" alt="loading"/>
            </div>
        </body>

    </main>
</template>

<script setup>
import dayjs from 'dayjs'
import { useRouter } from 'nuxt/app';
import {usedeletePost, useGetPostStore} from '@/store/post'
import Swal from 'sweetalert2'
import { ToastAlert } from '~~/utils/SweetAlertUtl';

definePageMeta({
    layout: 'dashboard',
})

const router = useRouter()

useHead({
    title: computed(() => 'NeerStack | Drafted Posts'),
    meta: [
        {
            name: 'description',
            content: 'Drafted Posts'
        }
    ]
})

onMounted(() =>{
    if(!sessionStorage.Token && !sessionStorage.User){
        router.push('/admin/login')
    }
})
const posts = useGetPostStore()
posts.getDraftedPosts()
.then(() =>{
    if(posts.status){
        ToastAlert(posts.message, 'success')
    }else{
        if(posts.error){
            ToastAlert(posts.error, 'error')
        }else if(posts.message){
            ToastAlert(posts.message, 'error')
        }
    }
})

// const {posts, search, size, current_page, onSearch, load, nextPage, prevPage} = getDraftPosts()

// load()

    const format_date = (value) => {
        if (value) {
            const date = dayjs(value);
            return date.format('dddd MMMM D, YYYY');
        }
    }

const deleteStore = usedeletePost()



const deletePost = (id)=>{
    deleteStore.id = id
    Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            deleteStore.deletePost().then(() =>{
                if(deleteStore.status && deleteStore.message){
                    Swal.fire({
                        icon: 'success',
                        title: 'Deleted!',
                        text: `${deleteStore.message}`,
                    }).then((result)=>{
                        if(result.isConfirmed){
                            router.go();
                        }

                    })

                }else if(!deleteStore.status && deleteStore.message){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${deleteStore.message}`
                    })
                }

                if(deleteStore.error){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${deleteStore.error}`
                    })
                }
         })

        }
    })

}

</script>

<style scoped>

    .recentDiv{
    float: right;
    border: none;
  }

  .recentDiv .prev{
    border:1px solid #ddd;
    border-radius: 10px;
    padding: 5px 30px;
    margin-right: 25px;
  }
  .recentDiv .prev:hover{
    background: #ddd;
  }
  .recentDiv .next:hover{
    background: #ddd;
  }
.recentDiv .next{
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 5px 41px;
  }
 .card{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30%;
  }

body{
    margin-left: 50px;
    margin-top: 120px;
    background-color: #f1f5f9;
}
.table{
    display: inline-flex;
    background-color: #f1f5f9;
    width: auto;
    max-width: 120vh;
    border: 2px solid #ddd;
    border-radius: 20px;
    margin: 10px auto;
    justify-content: center;

}

.table table thead th{
    padding: 16px 25px;
    border: 0 solid transparent;
    font-size: 14px;
    font-weight:300;
    color: #00273d;
    margin-left: 50%;
    justify-content: space-between;
}

.table table tbody tr{
    background: #fff;
}

.table table tbody td{
    justify-content: space-between;
    align-items: stretch;
    padding: 16px 25px;
    font-size: 12px;
    color: #888;
    font-weight: 300;
    border-left: 1px solid #ddd;
    text-align: left;
    margin: auto;
}
.table table tbody td.sn{
    border: none;
}
.action{
    margin: 0px auto;
    display: inline-flex;
    text-align: center;
    justify-content: center;
}

.action .material-icons{
    font-size: x-large;
}

.submit input{
    display: flex;
    padding: 10px 6px;
    width: 25%;
    margin-left: 70%;
    margin-bottom: 50px;
    box-sizing: border-box;
    border: none;
    --tw-bg-opacity: 1;
    /* border-bottom: 1px solid rgb(13 36 56 / var(--tw-bg-opacity)); */
    color: rgb(13 36 56 / var(--tw-bg-opacity));
    border-radius: 50px;
    text-indent: 20px;

  }
   .submit input.dark{
    --tw-bg-opacity: 1;
    background-color: rgb(13 36 56 / var(--tw-bg-opacity));
    border-bottom: 1px solid white;
  }
  .submit input::placeholder{
    color: #1B2737;
    opacity: 1;
  }

  .submit input.dark::placeholder{
    color: white;
    opacity: 1;
  }

  .draftPosts{
    width: 100%;
    max-width: 100%;
  }

</style>
