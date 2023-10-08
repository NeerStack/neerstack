import {ref} from 'vue';
import { ToastAlert } from '~~/utils/SweetAlertUtl';
// import dotenv from 'dotenv';
// dotenv.config()
const API = "https://neerstack-server-036b54bcba24.herokuapp.com"

export const URL = `${API}/blog`;

var Posts = async()=>{
    var res = await fetch(`${URL}/get-all-blogs`)
    const {data} = await res.json()
    return data
}

export const getPosts = () =>{
    var error = ref(null);
    var posts = ref(null);
    var search = ref('');
    var size = ref(5);
    var current_page = ref(1)

    try {
        var load = async()=>{
            const res = await fetch(`${URL}/get-all-blogs`, {
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem('Token')}`
                }
            })
             const data = await res.json()

             if(data.status === true){
                posts.value = data.data
             }else if(data.status === false){
                return ToastAlert(data.message, 'error')
             }
        }

        var onSearch = () => {
            if(posts.value && search.value){
                    return posts.value.filter((post) => post.title.toLowerCase().includes(search.value.toLowerCase()))
            }else{
                    return posts.value.filter((row, index) =>{
                        let start = (current_page.value - 1) * size.value;
                        let end = current_page.value * size.value;
                        if(index >= start && index < end) return true
                      })
                }
            }

        var nextPage = () => {
            if((current_page.value*size.value) < posts.value.length) current_page.value++;
        }

        var prevPage = () => {
            if(current_page.value > 1) current_page.value--;
          }
    } catch (err) {
        error.value = err.message
    }

    return{
        posts, error, size, current_page, search, load, onSearch, nextPage, prevPage
    }
}

export const getPostId = (id) =>{
    var error = ref(null)
    var post = ref(null)

    try {
        var load = async()=>{
            const res = await fetch(`${URL}/getPost/${id}`, {
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem('Token')}`
                }
            })

            const data = await res.json()

            if(data.status === true){
                post.value = data.data
            } else if(data.status === false){
                return ToastAlert(data.message, 'error')
            }
        }
    } catch (err) {
        error.value = err.message
    }

    return {post, error, load}
}

export const getNextPost = async(id) =>{
    // let post = ref(null)
    var res = await fetch(`${URL}/get-all-blogs`, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('Token')}`
        }
    })
    const data = await res.json()
    const Posts = data.data

        const currentPostId = `${id}`
        const currentPost = Posts.find((post)=> post._id === currentPostId);
        const currentPostIndex = Posts.indexOf(currentPost);
         var post = Posts[currentPostIndex + 1];

        if(!post) return null;
        return post

}

export const getPreviousPost = async(id) =>{

    // let post = ref(null)

        var res = await fetch(`${URL}/get-all-blogs`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('Token')}`
            }
        })
        const data = await res.json()
        const Posts = data.data

        const currentPostId = `${id}`
        const currentPost = Posts.find((post)=> post._id === currentPostId);
        const currentPostIndex = Posts.indexOf(currentPost);
        var post = Posts[currentPostIndex - 1];

        if(!post) return null;
        return post

}

export const onUploadImg = async (files, callback) => {
    const res = await Promise.all(
      files.map((file) => {
        return new Promise((rev, rej) => {
          const form = new FormData();
          form.append('image', file);

          fetch(`${URL}/upload-image`, {
                method: 'POST',
                body: form
            })
            .then((res) => rev(res.json()))
            .catch((error) => rej(error));
        });
      })
    );

    callback(res.map((item) => item.data));
};

export const getDraftPosts = () =>{
    var error = ref(null);
    var posts = ref(null);
    var search = ref('');
    var size = ref(5);
    var current_page = ref(1)

    try {
        var load = async()=>{
            const res = await fetch(`${URL}/get-draft-blogs`, {
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem('Token')}`
                }
            })
             const data = await res.json()

             if(data.status === true){
                posts.value = data.data
             }else if(data.status === false){
                posts.value = []
                return ToastAlert(data.message, 'error')
                // return ToastAlert(data.message, 'error')
             }
        }

        var onSearch = () => {
            if(posts.value && search.value){
                    return posts.value.filter((post) => post.title.toLowerCase().includes(search.value.toLowerCase()))
            }else{
                return posts.value.filter((row, index) =>{
                    let start = (current_page.value - 1) * size.value;
                    let end = current_page.value * size.value;
                    if(index >= start && index < end) return true
                  })
                }
            }

            var nextPage = () => {
                if((current_page.value*size.value) < posts.value.length) current_page.value++;
            }

            var prevPage = () => {
                if(current_page.value > 1) current_page.value--;
              }

    } catch (err) {
        error.value = err.message
    }

    return{
        posts, error, search, load, onSearch, nextPage, prevPage
    }
}

