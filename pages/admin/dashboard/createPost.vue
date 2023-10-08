<template>
    <main class="createPost">
        <logo/>
        <body>
            <form @submit.prevent>
                <label for="Image">Image: </label>
                <input type="file" placeholder="Post Image" v-on:change="onFileChnage" required>
                <div v-if="ImageError" class="error">{{ImageError}}</div>

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
                        :sanitize="sanitize"
                        :spellcheck="true"
                        :autocapitalize="true"
                        :autosave="true"
                        @onUploadImg="onUploadImg"

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
import { ref, onMounted } from 'vue';
import sanitizeHtml from 'sanitize-html';
import {onUploadImg} from '@/composite/Posts'
import screenfull from 'screenfull';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import mermaid from 'mermaid';
import highlight from 'highlight.js';
import 'highlight.js/styles/tokyo-night-dark.css';
import prettier from 'prettier';
import parserMarkdown from 'prettier/parser-markdown';
import {useCreatePostStore} from '@/store/post';
import { useRouter } from 'nuxt/app';
import {ToastAlert} from '@/utils/SweetAlertUtl'

definePageMeta({
    layout: 'dashboard',
})

useHead({
    title: computed(() => 'NeerStack | Admin Dashboard'),
    meta: [
        {
            name: 'description',
            content: 'Admin dashboard'
        }
    ]
})

const router = useRouter()

config({

    editorExtensions: {
    prettier: {
      prettierInstance: prettier,
      parserMarkdownInstance: parserMarkdown
    },
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
          prettier: 'prettier',
          pageFullscreen: 'fullscreen in page',
          fullscreen: 'fullscreen',
          preview: 'preview',
          htmlPreview: 'html preview',
          catalog: 'catalog',
          github: 'source code'
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
          descLabel: 'Desc:',
          descLabelPlaceHolder: 'Enter a description...',
          urlLabel: 'Link:',
          UrlLabelPlaceHolder: 'Enter a link...',
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

    onMounted(() =>{
    if(!sessionStorage.Token && !sessionStorage.User){
        router.push('/admin/login')
    }
})
    const Post = useCreatePostStore()


    var ImageError = ref('')

    // const submitFn = () =>{
    //   if(Post.accepted){
    //     return Post.CreatePost()
    //   }
    //   return;
    // }


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
    }

    const sanitize = (html) => {return sanitizeHtml(html)};



    const popup = () =>{
      Post.draft = false;
      Post.message = null;
      Post.status = null;
      Post.error = null;
      ImageError.value = ''
      Swal.fire({
        title: 'Do you want to publish post?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Publish',
        denyButtonText: `Don't publish`,
      }).then((result) =>{
        if(result.isConfirmed){
          if(Post.image){
            Post.CreatePost().then(() => {
              if(Post.status && Post.message){
                ToastAlert(Post.message, 'success')
            }else if(!Post.status && Post.message){
              ToastAlert(Post.message, 'error')
        }

        if(Post.error){
          ToastAlert(Post.error, 'error')
        }
          })
          }else{
            ImageError.value = "Please Select an Image"
          }


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
      ImageError.value = ''
      Swal.fire({
        title: 'Do you want to save to draft?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) =>{
        if(result.isConfirmed){
           if(Post.image){
            Post.CreatePost().then(() => {
              if(Post.status && Post.message){
                ToastAlert(Post.message, 'success')
            }else if(!Post.status && Post.message){
              ToastAlert(Post.message, 'error')
        }

        if(Post.error){
          ToastAlert(Post.error, 'error')
        }
          })
          }else{
            ImageError.value = "Please Select an Image"
          }

        }else if(result.isDenied){
          Swal.fire('Changes are not saved', '', 'info')
        }
      })

    }





</script>

<style scoped>

.createPost{
  padding: 50px;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  height: auto;
  max-height: max-content;
  background-color: #f1f5f9;
}

.createPost body{
    width: 100%;
    margin-left: 0px;
    background-color: #f1f5f9;
}
.createPost .markdown {
    text-align: left;
    display: block;
    justify-content: flex-start;
    align-items: flex-start;
}

.createPost form{
    max-width: 150vh;
    width: 100%;
    margin: 20px auto;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    background: white;
    text-align: left;
    padding: 30px;
    border-radius: 50px;
    border: 1px solid #000;
}

.createPost form .markdown{
    width: 100%;
    vertical-align: auto;

}
.createPost label{
    color: #000;
    display: block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
.createPost input{
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

.createPost input::placeholder{
  text-indent: 10px;
}
.createPost .pill{
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
.createPost .submit button{
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.createPost .submit{
    margin-left: 1%;
    display: inline-flex;
    text-align: center;
    justify-content: center;
    align-items: center;
}

.createPost .draft button{
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.createPost .draft{
    margin-left: 40%;
    display: inline-flex;
    text-align: center;
    justify-content: center;
    align-items: center;
}
.createPost .error{
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}

</style>
