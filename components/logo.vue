<template>
    <header>
         <div class="mylogo">
                <img :src="mylogo" alt="mylogo">
         </div>
        </header>
</template>
<script setup>
import mylogo from '@/assets/newLogo.png'
</script>
<style scoped>
    .mylogo{
    align-items: center;
    justify-content: center;
    display: flex;
}
</style>
