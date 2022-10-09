import {defineStore} from 'pinia'
import emailjs from '@emailjs/browser';

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
    status: '',
    error: ''
  }),
  actions: {
    async news(){
      this.status = null;
      this.error = null
      try {
        
      } catch (error) {
        
      }
    }
  }
})