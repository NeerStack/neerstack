import {defineStore} from 'pinia'
import emailjs from '@emailjs/browser';


var url = 'https://a.klaviyo.com/api/v2/list/SmtzdT/subscribe?api_key=pk_9211d3bb8e27c3d2710acedb37e4d6e98f';

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
    error: null
  }),
  actions: {
    async news(){
      this.status = null;
      this.error = null;
      const profile = {
        profiles: [
        {
          email: this.email,
          fullname: this.fullname
        }
        
      ]
    };

      try {
        const res = await fetch(url, {
          method: 'POST',
          headers:{
            accept: 'application/json', 
            'content-type': 'application/json',
          },
          body: JSON.stringify(profile)
        })
        .then(res =>{
           var data = res.json()
            if(data?.length){
              this.status = 'Subscribed Successfully'
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