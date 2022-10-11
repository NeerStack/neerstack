import {defineStore} from 'pinia'
import emailjs from '@emailjs/browser';
// import  fetch from 'node-fetch'

const url = 'https://codinmage-server.herokuapp.com/subscribe';
const quoteUrl = 'https://codinmage-server.herokuapp.com/quote';
const contactUrl = 'https://codinmage-server.herokuapp.com/contact';
export const setEmail = defineStore('email', {
    state: ()=>({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: '',
        status: null,
        error: null
    }),
    actions: {
        async send(){
            this.status = null;
            this.error = null;
            const form = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                website: this.website,
                message: this.message
            }
            await fetch(quoteUrl, {
              method: 'POST',
              headers:{
                accept: 'application/json', 
                'content-type': 'application/json',
              },
              body: JSON.stringify(form)
            })
            .then(async (res) =>{
              var data = await res.json()
              if(data.status){
                this.name ='';
                this.email = '';
                this.phone = '';
                this.subject = '';
                this.message = '';
                this.status = data.message
              }else{
                this.name ='';
                this.email = '';
                this.phone = '';
                this.website = '';
                this.message = '';
                this.error = data.message
              }
              
            })
            .catch(error => {
              this.error = error
            })
          }
    }
})

export const setNews = defineStore('newsletter', {
  state: () =>({
    fullname: "",
    email: '',
    status: null,
    message: null,
    error: null
  }),
  actions: {
    async news(){
      this.status = null;
      this.error = null;
      this.message = null
      const profile = {
          email: this.email,
          fullname: this.fullname
        };

      try {
        await fetch(url, {
          method: 'POST',
          headers:{
            accept: 'application/json', 
            'content-type': 'application/json',
          },
          body: JSON.stringify(profile)
        })
        .then(async (res) =>{
           var data = await res.json()
            if(data.status){
              this.status = data.status
              this.message = data.message
              this.fullname = '',
              this.email = ''
            }else{
              this.status = data.status
              this.error = data.message
              this.fullname = '',
              this.email = ''
            }
        })
        .catch(err => {
          this.error = err
          console.error(err)
        })
       

      } catch (error) {
        console.error(error);
        this.error = error
      }
    }
  }
})

export const setContact = defineStore('email', {
  state: ()=>({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      status: null,
      error: null
  }),
  actions: {
      async send(){
          this.status = null;
          this.error = null;
          const form = {
              name: this.name,
              email: this.email,
              phone: this.phone,
              subject: this.subject,
              message: this.message
          }
          await fetch(contactUrl, {
            method: 'POST',
            headers:{
              accept: 'application/json', 
              'content-type': 'application/json',
            },
            body: JSON.stringify(form)
          })
          .then(async (res) =>{
            var data = await res.json()
            if(data.status){
              this.name ='';
              this.email = '';
              this.phone = '';
              this.subject = '';
              this.message = '';
              this.status = data.message
            }else{
              this.name ='';
              this.email = '';
              this.phone = '';
              this.subject = '';
              this.message = '';
              this.error = data.message
            }
            
          })
          .catch(error => {
            this.error = error
          })
        }
  }
})