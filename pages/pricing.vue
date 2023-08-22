<template>
    <div class="construct">
        <h1>Site Under Construction</h1>
        <img :src="under" alt="construction">
    </div>
</template>
<script setup>
import under from '@/assets/under-construction.png'
const setdata = {
    title: "NeerStack | Pricing"
}
useHead({
    title: computed(() => setdata.title)
})

</script>
<style lang="scss">
    .construct{
        margin-top: 190px;
        h1{
            font-size: calc(80px);
            font-weight: bolder;
        }
        img{
            display: inline-flex;
            justify-content: center;
            width: 1000px;
            margin-top: 6%;
            margin-bottom: 50px;
        }
    }
</style>
