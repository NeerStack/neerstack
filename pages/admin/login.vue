<template>
    <main>
        <header>
            <div class="logo">
                <img :src="logo" alt="logo"/>
            </div>
        </header>
        <section >
            <form class="grey-bg" @submit.prevent>
                <h1>Sign in</h1>
                <label> Email/Username: </label>
                <input type="text" placeholder="Email/Username"  v-model="User.email" required>
                <label>Password: </label>
                <input type="password" id="password" placeholder="Please enter your password"  v-model="User.password" required>
                <div>
                    <label> Show password: </label>
                    <input type="checkbox" @click="togglePassword">
                </div>
                <div class="submit">
                    <button @click="handleSubmit"> Login </button>
                </div>
            </form>
        </section>

    </main>

</template>
<script setup>
import Swal from 'sweetalert2';
import logo from '@/assets/newLogo.png'
import { UserStore } from '../../store/user'
import { useRouter } from 'nuxt/app';
import { onMounted} from 'vue';

useHead({
    title: computed(() => 'NeerStack | Admin Login'),
    meta: [
        {
            name: 'description',
            content: 'Login to your account'
        }
    ]
})

const router = useRouter()
    definePageMeta({
        layout: 'login',
    })

    const User = UserStore()

    const togglePassword = () =>{
    var x = document.getElementById('password')
    if(x.type === 'password'){
        x.type = 'text'
    }else{
        x.type = 'password'
    }
}

onMounted(()=>{
    if(sessionStorage.Token && sessionStorage.User){
        router.push('/admin/dashboard')
    }
})


    const handleSubmit = () =>{
        var Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

        User.loginUser().then(() =>{
            if(User.data){
                sessionStorage.setItem('User', JSON.stringify(User.data))
                sessionStorage.setItem('Token', User.data.token)
            }

            if(User.status && User.message){
                Toast.fire({
                    icon: 'success',
                    title: User.message
                }).then(() =>{
                    router.push('/admin/dashboard')
                })
            }else if(!User.status && User.message){
                Toast.fire({
                    icon: 'error',
                    title: User.message
                })
            }

            if(User.error){
                 Toast.fire({
                    icon: 'error',
                    title: User.error
                })
            }
        })
    }
</script>
<style scoped>

header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    /* height: 20rem; */
    width: 50rem;
    max-width: 100%;
}

@media screen and (max-width: 991px) {


    form{
        width: 100%;
        height: inherit;
    }

    form h1{
        font-size: medium;
    }



}

main{
    display: inline-flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-top: 10%;
    max-width: 100%;
    text-align: center;
}

/* body{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
    max-width: 100%;
} */

form{
    width: 420px;
    max-width: 100%;
    margin: 130px auto;
    /* background: white; */
    text-align: left;
    padding: 40px;
    border-radius: 40px;
    border: #ddd solid 1px;
}

form h1{
    font-size: xx-large;
    color: #000;
    text-transform: uppercase;
    text-align: center;
}

label{
    color: #000;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input{
    display: block;
    padding: 10px 6px;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    border-radius: 18px;
    color: #000;
    text-indent: 12px;
}
input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin-left: 10px;
    margin-top: 0px;
    position: relative;
    border: 1px solid #ddd;
    border-radius: 10px;
}
input::placeholder{
    color: #000;
    text-indent: 12px;
}
button{
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.submit{
    text-align: center;
}
.error{
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
@media screen and (max-width: 991px) {
    header{
        max-width: 30%;
        padding: 0 1%;
    }
    header img{
        width: 100%;
    }

    form{
        width: 100%;
        height: inherit;
    }

    form h1{
        font-size: medium;
    }
    label{
        font-size: 0.7rem;
    }

    input{
        width: 100%;
        font-size: small;
    }
}

</style>
