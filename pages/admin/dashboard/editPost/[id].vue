<template>
    <main class="editPost">
        <logo/>
        <body v-if="Post.status">
            <div class="backButton">
                <button @click="back"><font-awesome-icon icon="fa-solid fa-arrow-left-long" /> Back</button>
            </div>
            <form @submit.prevent>
                <label class="image" for="Image">Image:
                    <img :src="Post.oldImage" alt="post-image">
                    <small>Please make sure the image is exact 1280 x 770 pixels</small>
                </label>
                <div class="actions">
                    <label>
                        <input type="file" class="hidden" @change="onFileChnage">
                        <span class="material-icons">add_a_photo</span>
                    </label>
                    <label>
                    <button @click="deleteImage"> <span class="material-icons">
                            delete_sweep
                        </span> </button>

                    </label>
                </div>



                <label for="title"> Title: </label>
                <input type="text" placeholder="Post Title" v-model="Post.title" required>

                <!-- <label for="desc"> Description: </label>
                <input type="text" placeholder="Post Description" v-model="Post.desc" required> -->

                <label for="tags"> Tags: </label>
                <input type="text" placeholder="Post Tags" v-model="Post.tag" @keyup="addTags">
                <div v-for="tagged in Post.tags" :key="tagged" class="pill">
                  <span @click="deleteTag(tagged)">{{tagged}}</span>
                </div>

                <label for="content"> Contents: </label>
                <div class="markdown">
                    <MdEditor
                      language="en-US"
                      preview-theme="default"
                      :preview="false"
                      code-theme="atom"
                      v-model="Post.content"
                      :no-prettier="false"
                      :no-katex="false"
                      :no-mermaid="false"
                      :no-iconfont="false"
                      placeholder="Enter your post content"
                      :spellcheck="true"
                      :autocapitalize="true"
                      :autosave="true"
                      @onUploadImg="onUploadImg"
                      :auto-detect-code="true"
                      :html-preview="true"
                      :on-html-changed="sanitize"
                    >
                    </MdEditor>

                </div>
                  <div class="draft">
                    <button @click="draftpopup"> Save to Draft </button>
                  </div>

                  <div class="submit">
                    <button @click="popup"> Publish </button>
                  </div>

            </form>
        </body>

    </main>
</template>

<script setup>
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import {MdEditor, config} from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {onUploadImg} from '@/composite/Posts'
import screenfull from 'screenfull';
import { useRouter, useRoute } from 'nuxt/app';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import mermaid from 'mermaid';
import highlight from 'highlight.js';
import 'highlight.js/styles/tokyo-night-dark.css';
// import prettier from 'prettier';
// import parserMarkdown from 'prettier/parser-markdown';
import {useEditPostStore} from '@/store/post';
import ImageIcon from '@/assets/newLogo.png'


definePageMeta({
    layout: 'dashboard',
})

const router = useRouter()
const route = useRoute()

useHead({
    title: computed(() => 'NeerStack | Edit Post'),
    meta: [
        {
            name: 'description',
            content: 'Edit your post'
        }
    ]
})

config({
    editorExtensions: {
    // prettier: {
    //   prettierInstance: prettier,
    //   parserMarkdownInstance: parserMarkdown
    // },
    highlight: {
      instance: highlight
    },
    screenfull: {
      instance: screenfull
    },
    katex: {
      instance: katex
    },
    cropper: {
      instance: Cropper
    },
    mermaid: {
      instance: mermaid
    }
  },

  editorConfig: {
    languageUserDefined: {
      'en-US': {
        toolbarTips: {
          bold: 'bold',
          underline: 'underline',
          italic: 'italic',
          strikeThrough: 'strikeThrough',
          title: 'title',
          sub: 'subscript',
          sup: 'superscript',
          quote: 'quote',
          unorderedList: 'unordered list',
          orderedList: 'ordered list',
          codeRow: 'inline code',
          code: 'block-level code',
          link: 'link',
          image: 'image',
          table: 'table',
          mermaid: 'mermaid',
          katex: 'formula',
          revoke: 'revoke',
          next: 'undo revoke',
          save: 'save',
          // prettier: 'prettier',
          pageFullscreen: 'fullscreen in page',
          fullscreen: 'fullscreen',
          preview: 'preview',
          htmlPreview: 'html preview',
          catalog: 'catalog',
          // github: 'source code'
        },
        titleItem: {
          h1: 'Lv1 Heading',
          h2: 'Lv2 Heading',
          h3: 'Lv3 Heading',
          h4: 'Lv4 Heading',
          h5: 'Lv5 Heading',
          h6: 'Lv6 Heading'
        },
        imgTitleItem: {
          link: 'Add Img Link',
          upload: 'Upload Img',
          clip2upload: 'Clip Upload'
        },
        linkModalTips: {
          title: 'Add ',
          descLable: 'Desc:',
          descLablePlaceHolder: 'Enter a description...',
          urlLable: 'Link:',
          UrlLablePlaceHolder: 'Enter a link...',
          buttonOK: 'OK'
        },
        clipModalTips: {
          title: 'Crop Image',
          buttonUpload: 'Upload'
        },
        copyCode: {
          text: 'Copy',
          successTips: 'Copied!',
          failTips: 'Copy failed!'
        },
        mermaid: {
          flow: 'flow',
          sequence: 'sequence',
          gantt: 'gantt',
          class: 'class',
          state: 'state',
          pie: 'pie',
          relationship: 'relationship',
          journey: 'journey'
        },
        katex: {
          inline: 'inline',
          block: 'block'
        },
        footer: {
          markdownTotal: 'Word Count',
          scrollAuto: 'Scroll Auto'
        }
      },
    },
    // mermaid template
    mermaidTemplate: {
      flow: `flow tempalte`,
      sequence: `sequence template`,
      gantt: `gantt template`,
      class: `class template`,
      state: `state template`,
      pie: `pie template`,
      relationship: `relationship template`,
      journey: `journey template`
    },
    // delay rendering time(ms)
    renderDelay: 0
  }
});

    // const props = defineProps({
    //     id: String
    // })
    const id = route.params.id

    const Post = useEditPostStore()

    onMounted(() =>{
        if(!sessionStorage.Token && !sessionStorage.User){
         router.push('/admin/login')
        }
        Post.getById(id)
    })

     function back(){
            router.go(-1)
        }

    if(Post.oldImage === "" || Post.oldImage === null || !Post.oldImage){
            Post.oldImage = ImageIcon
    }

    const addTags = (e) =>{
      if(e.key === "," && Post.tag){
        if(!Post.tags.includes(Post.tag.slice(0, -1)) && Post.tags.length <= 4){
          Post.tags.push(Post.tag.slice(0, -1).toLowerCase());
        }
      Post.tag = '';
      }
    }


    const deleteTag = (tagged) => {
      Post.tags = Post.tags.filter((item) => {
        return tagged !== item
      })
    }

    const onFileChnage = (e) =>{
      var files = e.target.files || e.dataTransfer.files;
      if(!files.length)
        return;
      Post.image = files[0]
      Post.UpdateImage().then(() =>{
        if(Post.status && Post.message){
              Swal.fire({
                icon: 'success',
                title: 'Done',
                text: `${Post.message}`,
              })
            }else if(!Post.status && Post.message){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${Post.message}`
          })
        }

        if(Post.error){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${Post.error}`
          })
        }
      })
    }

    const deleteImage = () =>{
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
            Post.DeleteImage().then(() =>{
                Post.oldImage = ImageIcon
                if(Post.status && Post.message){
                    Swal.fire({
                        icon: 'success',
                        title: 'Deleted!',
                        text: `${Post.message}`,
                    })

                }else if(!Post.status && Post.message){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${Post.message}`
                    })
                }

                if(Post.error){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${Post.error}`
                    })
                }
         })

        }
    })
    }

    const sanitize = (html) => {
      Post.newContent = html
    };

    const popup = () =>{
      Post.draft = false;
      Post.message = null;
      Post.status = null;
      Post.error = null;
      Swal.fire({
        title: 'Do you want to publish post?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Publish',
        denyButtonText: `Don't publish`,
      }).then((result) =>{
        if(result.isConfirmed){
            Post.UpdatePost().then(() => {
              Post.getById(id)
              if(Post.status && Post.message){
              Swal.fire({
                icon: 'success',
                title: 'Done',
                text: `${Post.message}`,
              })
            }else if(!Post.status && Post.message){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${Post.message}`
          })
        }

        if(Post.error){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${Post.error}`
          })
        }
          })


        }else if(result.isDenied){
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    }

    const draftpopup = () =>{
      Post.draft = true;
      Post.message = null;
      Post.status = null;
      Post.error = null;
      Swal.fire({
        title: 'Do you want to save to draft?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) =>{
        if(result.isConfirmed){
            Post.UpdatePost().then(() => {
              if(Post.status && Post.message){
              Swal.fire({
                icon: 'success',
                title: 'Done',
                text: `${Post.message}`,
              })
            }else if(!Post.status && Post.message){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${Post.message}`
          })
        }

        if(Post.error){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${Post.error}`
          })
        }
          })

        }else if(result.isDenied){
          Swal.fire('Changes are not saved', '', 'info')
        }
      })

    }





</script>

<style scoped>

.editPost{
  margin: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 60px;
  width: 100%;
  background-color: #f1f5f9 !important;
}

.editPost body{
    width: 100%;
    margin-left: 0px;
    background-color: #f1f5f9 !important;
}
.editPost .markdown {
    text-align: left;
    display: block;
    justify-content: flex-start;
    align-items: flex-start;
}

.editPost form{
    max-width: 150vh;
    width: 100%;
    margin: 20px auto;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    background: white;
    text-align: left;
    padding: 30px;
    border-radius: 50px;
    border: 1px solid #000;
}

.editPost form .markdown{
    width: 100%;
    vertical-align: auto;

}
.editPost label{
    color: #000;
    display: block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
.editPost input{
    justify-content: center;
    align-items: center;
    display: block;
    padding: 10px 6px;
    width: 98%;
    box-sizing: border-box;
    border: none;
    border-radius: 20px;
    border-bottom: 1px solid #ddd;
    color: #000;
    text-indent: 10px;
}

.editPost input::placeholder{
  text-indent: 10px;
}
.editPost .pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
.editPost .submit button{
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.editPost .submit{
    margin-left: 1%;
    display: inline-flex;
    text-align: center;
    justify-content: center;
    align-items: center;
}

.editPost .draft button{
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.editPost .draft{
    margin-left: 40%;
    display: inline-flex;
    text-align: center;
    justify-content: center;
    align-items: center;
}
.editPost .error{
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}

.editPost .hidden{
    display: none;
}

.editPost .actions{
    display: inline-flex;
    margin-left: 210px;
    padding: 2px;
}
.editPost .actions label{
    margin: 10%;
}

.editPost .actions label span{
    font-size: calc(2rem);
    color: #000;
}

.editPost .image{
    width: 100%;
}

.editPost .image small{
    font-size: 0.8em;
    color: #000;
    font-weight: bold;
    margin-left: 50px;
}
.editPost .image img{
    display: flex;
    margin-left: 50px;
    width: 400px;
    height: 300px;
    border: 4px solid #ddd;
    border-radius: 30px;
}
.editPost .backButton{
    text-align: left;
    margin: 15px;
    margin-top: 10%;
    margin-left: 20px;
    font-size: large;
    font-weight: bold;
    border-radius: 8px;
    border-bottom: 1px solid #ddd;
    width: 90px;
    color: #1B2737;
}
</style>
