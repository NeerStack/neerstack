import { defineStore } from 'pinia'
// const config = useRuntimeConfig()
// const API = config.public.apiUrl;
// process.env.API ? decodeURI(process.env.API)
const API = 'https://neerstack-server-036b54bcba24.herokuapp.com';
// export const useRuntime = () => {
//     const config = useRuntimeConfig()
//     const API = config.public.apiUrl;
//     return API
// }

const URL = `${API}/user`;

export const UserStore = defineStore('user', {
    state: () => ({
        email: '',
        password: '',
        message: null,
        status: null,
        error: null,
        data: null,
    }),

    actions:{
        async loginUser(){
            this.message = null;
            this.status = null;
            this.error = null;
            try {
                const body = {
                    email: this.email,
                    password: this.password
                }
                const res = await fetch(`${URL}/login`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                })
                const data = await res.json()
                if(data.status === true){
                    this.status = true,
                    this.message = data.message,
                    this.data = data.data
                }else{
                    this.status = false,
                    this.message = data.message
                }
            } catch (error) {
                this.error = error
            }
        }
    }
})
