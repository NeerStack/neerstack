import {defineStore} from 'pinia'
import emailjs from '@emailjs/browser';
// import  fetch from 'node-fetch'

const url = 'https://codinmage-server.herokuapp.com/subscribe';

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
            await emailjs.send('service_ci60g5d','template_gqunup8', form, 'HyiU9sJQVja8wklEE' )
            .then((result) =>{
              this.name ='';
              this.email = '';
              this.phone = '';
              this.website = '';
              this.message = ''
              this.status = result.text
            }, (error) => {
              this.error = error.text
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