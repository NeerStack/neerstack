import {defineStore} from 'pinia'
import ImageIcon from '@/assets/newLogo.png'

const API = 'https://neerstack-server-036b54bcba24.herokuapp.com';

const URL = `${API}/blog`;

export const setPost = defineStore('post', {
    state: () => ({
        word: '',
        wordarr: [
            "We take pride in delivering unparalleled quality services at prices that won't break the bank.",
            "We seamlessly become a remote part of your team, working together as one cohesive unit.",
            "We cherish your sense of humor, making every collaboration a joyous experience 😂.",
            "Our commitment knows no bounds as we consistently go the extra mile to exceed your expectations.",
            "We celebrate every milestone in our clients' success stories, knowing we've played a vital role.",
            "Our team of dedicated professionals is poised to not just meet but surpass your lofty expectations.",
            "We harness cutting-edge technology to craft a distinctive, future-ready image for your business.",
            "Our unwavering dedication to punctuality ensures that we always work and deliver on time.",
            "We take pride in offering a 100% satisfaction guarantee, ensuring you're delighted with our services.",
            "We're at your service 24/7, ready to assist you whenever you need us.",
            "We believe that your vision, combined with our expertise, sparks a powerful catalyst for your growth."
        ],
        sleepTime: 70,
        curPhraseIndex: 0
    }),
    actions:{
        sleep(ms){
            return new Promise((resolve) => setTimeout(resolve, ms));
        },
        async writeLoop(){
            while(true){
                let curWord = this.wordarr[this.curPhraseIndex];

                for(let i = 0; i < curWord.length; i++){
                    this.word = curWord.substring(0, i+1).toLowerCase();
                    await this.sleep(this.sleepTime);
                }

                await this.sleep(this.sleepTime * 10);

                for(let i = curWord.length; i > 0; i--){
                    this.word = curWord.substring(0, i-1).toLowerCase();
                    await this.sleep(this.sleepTime);
                }

                await this.sleep(this.sleepTime * 5);

                if(this.curPhraseIndex === this.wordarr.length - 1){
                    this.curPhraseIndex = 0;
                }else{
                    this.curPhraseIndex++;
                }

            }
        }
    },

})

export const useCreatePostStore = defineStore('createpost', {
    state: () => ({

          image: '',
          title: '',
          tag: '',
          tags: [ ],
          content: '',
          error: null,
          message: null,
          draft: false,
          archived: false,
          status: false,
          newContent: null,
      }),

    getters: {

    },

    actions: {
      async CreatePost() {
        this.message = null;
        this.status = null;
        this.error = null;
           try {
            var form = new FormData();
            form.append('image', this.image);
            form.append('title', this.title);
            form.append('tags', this.tags);
            form.append('content', this.content);
            form.append('htmlContent', this.newContent);
            form.append('draft', this.draft)
            form.append('archived', this.archived)

            const res = await fetch(`${URL}/create`, {
              method: 'POST',
              headers:{
                Authorization: `Bearer ${sessionStorage.getItem('Token')}`
            },
              body: form
            });
              const data = await res.json();
              if(data.status === true){
                this.status = true
                this.message = data.message;
                this.image = '';
                this.title = '';
                this.tags= [ ];
                this.content = '';
                this.draft = false;
                this.archived = false;
                this.error = null;
              }else{
                this.status = false
                this.message = data.message
            }

        } catch (error) {
          this.status = false
          this.error = error;
        }

      }
    },

    persist: true
  })

  export const useEditPostStore = defineStore('editpost', {
    state: () => ({
          id: '',
          image: '',
          oldImage: ImageIcon,
          title: '',
          tag: '',
          tags: [ ],
          content: '',
          error: null,
          message: null,
          draft: null,
          archived: null,
          status: false,
          newContent: null,
      }),

    getters: {

    },

    actions: {
      async getById(id){
        this.id = id
        try {
          const res = await fetch(`${URL}/get-blog/${this.id}`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('Token')}`
            }

          })
          const data = await res.json()
          if(data.status === true){
            this.status = true
              this.title = data.data.title;
              this.tags = data.data.tags;
              this.content = data.data.content;
              this.draft = data.data.draft;
              this.archived = data.data.archived;
              if(data.data.image.url){
                this.oldImage = data.data.image.url
              }else{
                this.oldImage = ImageIcon
              }

          }else{
            this.status = false
            this.message = data.message
          }

        } catch (error) {
          this.status = false
          this.error = error
        }
      },

      async UpdatePost() {
        this.message = null;
        this.status = null;
        this.error = null;
           try {
            const body = {
              title: this.title,
              tags: this.tags,
              content: this.content,
              htmlContent: this.newContent,
              draft: this.draft
            }

            const res = await fetch(`${URL}/update-blog/${this.id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('Token')}`
              },
              body: JSON.stringify(body)
            });
              const data = await res.json();
              if(data.status === true){
                this.status = true
                this.message = data.message;
                // this.title = '';
                // this.tags= [ ];
                // this.content = '';
                // this.draft = false;
                // this.archived = false;
                // this.error = null;
              }else{
                this.status = false
                this.message = data.message
            }

        } catch (error) {
          this.status = false
          this.error = error;
        }

      },

      async DeleteImage(){
        this.message = null;
        this.status = null;
        this.error = null;
        try {
          const res = await fetch(`${URL}/remove-image/${this.id}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('Token')}`
            }
          })
          const data = await res.json()
          if(data.status === true){
            this.status = true,
            this.message = data.message
          }else{
            this.status = false,
            this.message = data.message
          }
        } catch (error) {
          this.status = false
          this.error = error
        }
      },

      async archiveBlog(archive){
        this.message = null;
        this.status = null;
        this.error = null;
        try {
          const res = await fetch(`${URL}/archive-blog/${this.id}`, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('Token')}`
            },
            body: JSON.stringify({archived: archive})
          })
          const data = await res.json()
          if(data.status === true){
            this.status = true,
            this.message = data.message
          }else{
            this.status = false,
            this.message = data.message
          }
        } catch (error) {
          this.status = false
          this.error = error
        }
      },

      async draftBlog(draft){
        this.message = null;
        this.status = null;
        this.error = null;
        try {
          const res = await fetch(`${URL}/draft-blog/${this.id}`, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('Token')}`
            },
            body: JSON.stringify({draft: draft})
          })
          const data = await res.json()
          if(data.status === true){
            this.status = true,
            this.message = data.message
          }else{
            this.status = false,
            this.message = data.message
          }
        } catch (error) {
          this.status = false
          this.error = error
        }
      },

      async UpdateImage(){
        this.message = null;
        this.status = null;
        this.error = null;
        try {
          const form = new FormData()
          form.append('image', this.image)
          const res = await fetch(`${URL}/change-image/${this.id}`, {
            method: 'PUT',
            headers:{
                Authorization: `Bearer ${sessionStorage.getItem('Token')}`
            },
            body: form
          })
          const data = await res.json()
          if(data.status === true){
            this.status = true,
            this.message = data.message,
            this.oldImage = data.data.image.url
          }else{
            this.status = false,
            this.message = data.message
          }
        } catch (error) {
          this.status = false
          this.error = error
        }
      }
    }
  })

  export const usedeletePost = defineStore('deletePost', {
    state: () =>({
      id: '',
      message: null,
      status: false,
      error: null
    }),

    actions:{
      async deletePost(){
        const deleteUrl = `${URL}/delete-blog/${this.id}`
        try {
              const res = await fetch(deleteUrl, {
              method: 'DELETE',
              headers:{
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${sessionStorage.getItem('Token')}`
              }
            })
            const data = await res.json()
            if(data.status === true){
              this.status = true
              this.message = data.message;
              this.id = '';
              this.error = null;
            }else{
              this.status = false
              this.message = data.message
          }
        } catch (error) {
          this.status = false
          this.error = error
        }
      }
    }
  })

  export const useGetPostStore = defineStore('getPost', {
    state: ()=>({
      id: '',
      error: null,
      post: {},
      message: null,
      nextPost: null,
      previousPost: null,
      search: null,
      posts: [],
      size: 6,
      current_page: 1,
      status: null
    }),

    getters:{
      searchState: (state) =>{
        if(state.posts && state.search && state.search !== "" && state.search !== null){
          return state.posts.filter((post) => post.title.toLowerCase().includes(state.search.toLowerCase()))
       }else{
          return state.posts.filter((row, index) =>{
            let start = (state.current_page - 1) * state.size;
            let end = state.current_page * state.size;
            if(index >= start && index < end) return true
          })
       }
      }
    },

    actions: {
      nextPage(){
        if((this.current_page*this.size) < this.posts.length) this.current_page++;
      },
      prevPage(){
        if(this.current_page > 1) this.current_page--;
      },
      async getPosts(){
        this.status = null
        this.posts = []
        this.message = null
        this.error = null
        try {
          const res = await fetch(`${URL}/get-all-blogs`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('Token')}`
            }
          })
          const data = await res.json()

          if(data.status === true){
            this.posts = data.data;
            this.status = true
            this.message = data.message
            // this.displayPost = this.posts;
         }else if(data.status === false){
            this.status = false
            this.message = data.message
         }

        } catch (error) {
          this.status = false
          this.error = error.message
        }
      },
      async getActivePosts(){
        this.status = null
        this.posts = []
        this.message = null
        this.error = null
        try {
          const res = await fetch(`${URL}/get-active-blogs`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            }
          })
          const data = await res.json()

          if(data.status === true){
            this.posts = data.data;
            this.status = true
            this.message = data.message
            // this.displayPost = this.posts;
         }else if(data.status === false){
            this.status = false
            this.message = data.message
         }

        } catch (error) {
          this.status = false
          this.error = error.message
        }
      },
      async getBySlug(slug){
        this.status = null
        this.post = null
        this.message = null
        this.error = null
        try {
          const res = await fetch(`${URL}/get-blog-by-slug/${slug}`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }

          })
          const {status, data, message} = await res.json()
          if(status){
            this.status = true
            this.post = data
          }else{
            this.status = false
            this.message = message
          }
        } catch (error) {
          this.status = false
          this.error = error
        }
      },
      async getDraftedPosts(){
        this.status = null
        this.posts = []
        this.message = null
        this.error = null
        try {
          const res = await fetch(`${URL}/get-draft-blogs`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('Token')}`
            }
          })
          const data = await res.json()

          if(data.status === true){
            this.posts = data.data;
            this.status = true
            this.message = data.message
            // this.displayPost = this.posts;
         }else if(data.status === false){
            this.status = false
            this.message = data.message
         }

        } catch (error) {
          this.status = false
          this.error = error.message
        }
      },
      async getPostById(){
        this.status = null
        this.message = null;
        this.error = null;
        this.post = null;
        try {
          const res = await fetch(`${URL}/get-blog/${this.id}`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('Token')}`
            }
          })
          const data = await res.json()
          if(data.status === true){
            this.status = true
            this.post = data.data
            this.message = data.message
        } else if(data.status === false){
            this.status = false
            this.message = data.message
        }

        } catch (error) {
          this.status = false
          this.error = error.message
        }
      },

      async getContPost(){
        try {
          // var res = await fetch(`${URL}/getAllPosts`, {
          //   method: 'GET'
          // })
          // const data = await res.json()
          const Posts = this.posts

          const currentPost = Posts.find((post) => post._id ===  this.id);
          const currentPostIndex = Posts.indexOf(currentPost);
          const post = Posts[currentPostIndex + 1];
          const opppost = Posts[currentPostIndex - 1];
          if(!post){
            this.nextPost = null
          }else{
            this.nextPost = post
          }

          if(!opppost){
            this.previousPost = null
          }else{
            this.previousPost = opppost
          }
        } catch (error) {
          this.error = error.message
        }
      }
    },
    persist: true
  })

