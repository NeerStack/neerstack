<template>
    <main class="home">
        <logo/>
        <div>
            <h2>
                Welcome to the dashboard
            </h2>
        </div>
    </main>
</template>
<script setup>
    import { useRouter } from 'nuxt/app';
    const router = useRouter()
    onMounted(() =>{

        if(typeof window !== 'undefined'){
            if(!sessionStorage.Token && !sessionStorage.User){
                router.push('/admin/login')
            }
        }

    })
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
</script>
<style scoped>
.home{
    width: 100%;
    max-width: 100%;
    align-items: center;
    justify-content: center;
}
</style>
