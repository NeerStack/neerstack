<template>
    <main class="listPosts">
        <logo/>
        <section>
            <div v-if="posts" style="background-color: transparent !important;">
             <div class="submit">
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css">
                    <input type="text" v-model="search" placeholder="&#xF002; Search" style="font-family: Arial, 'Font Awesome 5 Free'"/>
                </div>
            <div class="table" v-if="posts.posts.length > 0">

                <table>
                <thead>
                    <tr>
                        <th> S/N </th>
                        <th> Post Title</th>
                        <th>Archived</th>
                        <th>Drafted</th>
                        <th>tags</th>
                        <th>Created At</th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="posts.posts" v-for="(post, index) in posts.posts" :key="post._id">
                        <td class="sn"><div style="width: 1px">{{index+1}}</div> </td>
                        <td><div style="width: 200px">{{post.title}}</div> </td>
                        <td>
                            <label class="switch">
                                <input type="checkbox" v-model="post.archived" @change="archiveBlog(post._id, post.archived)">
                                <span class="slider round"></span>
                            </label>
                        </td>
                        <td>
                            <label class="switch">
                                <input type="checkbox" v-model="post.draft" @change="draftBlog(post._id, post.draft)">
                                <span class="slider round"></span>
                            </label>
                        </td>
                        <td>
                            <div style="width: 200px">
                                <span v-if="post.tags.length > 0" v-for="(tag, index) in post.tags" :key="index" style="margin-right: 5px; background-color: #ddd; padding: 5px; border-radius: 5px; overflow: hidden; word-break: normal; word-wrap: normal; text-wrap:nowrap;">{{tag}}</span>
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
                    <h1> No Posts </h1>
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
        </section>
    </main>
</template>

<script setup>
import dayjs from 'dayjs'
import { useRouter } from 'nuxt/app';
import {usedeletePost, useEditPostStore, useGetPostStore} from '@/store/post'
import Swal from 'sweetalert2';
import { ToastAlert } from '~~/utils/SweetAlertUtl';

definePageMeta({
    layout: 'dashboard',
})

const router = useRouter()

useHead({
    title: computed(() => 'NeerStack | Posts'),
    meta: [
        {
            name: 'description',
            content: 'Posts'
        }
    ]
})

onMounted(() =>{
    if(!sessionStorage.Token && !sessionStorage.User){
        router.push('/admin/login')
    }
})
// const {posts, search, size, current_page, onSearch, load, nextPage, prevPage} = getPosts()

// load()

const deleteStore = usedeletePost()
const posts = useGetPostStore()
const editPost = useEditPostStore()

const archiveBlog = async(id, archive) =>{
    editPost.id = id
   await editPost.archiveBlog(archive)
    .then(() =>{
        if(editPost.status){
            ToastAlert(editPost.message, 'success')
        }else{
            if(editPost.error){
                ToastAlert(editPost.error, 'error')
            }else if(editPost.message){
                ToastAlert(editPost.message, 'error')
            }
        }
    })
}

const draftBlog = async(id, draft) =>{
    editPost.id = id
    await editPost.draftBlog(draft)
    .then(() =>{
        if(editPost.status){
            ToastAlert(editPost.message, 'success')
        }else{
            if(editPost.error){
                ToastAlert(editPost.error, 'error')
            }else if(editPost.message){
                ToastAlert(editPost.message, 'error')
            }
        }
    })
}

posts.getPosts()
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

const format_date = (value) => {
    if (value) {
     const date = dayjs(value);
    return date.format('dddd MMMM D, YYYY');
    }
}


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

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

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

section{
    margin-left: 50px;
    margin-top: 120px;
    background-color: #f1f5f9;
}
.table{
    display: inline-flex;
    /* background: transparent; */
    width: auto;
    max-width: 120vh;
    border: 2px solid #000;
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

/* .table table tbody tr{
    background: #fff;
} */

.table table tbody td{
    justify-content: space-between;
    align-items: stretch;
    padding: 16px 25px;
    font-size: 12px;
    color: #000;
    font-weight: 300;
    border-left: 1px solid #000;
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
    /* border-bottom: 1px solid white; */
  }
  .submit input::placeholder{
    color: #000;
    /* opacity: 1; */
  }

  .submit input.dark::placeholder{
    color: #000;
    /* opacity: 1; */
  }

  .listPosts{
    width: 100%;
    height: 100%;

  }

  .submit{
    background-color: #f1f5f9 !important;
  }


</style>
