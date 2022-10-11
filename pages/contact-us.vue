<template>
    <div class="construct">
        <h1>Site Under Construction</h1>
        <img :src="under" alt="construction">
    </div>
</template>
<script setup>
import under from '@/assets/under-construction.png'
const setdata = {
    title: "CodinMage | Contact"
}
useHead({
    title: computed(() => setdata.title)
})
definePageMeta({
  key: route => route.fullPath
})
</script>