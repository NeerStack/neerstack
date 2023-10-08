<template>
  <div class="app dark:bg-black dark:text-white">
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>

  const setdata = {
    title: "NeerStack | Home",
    description: "NeerStack is a software development company that provides software development services to clients all over the world.",
    keywords: "NeerStack, Software Development, Web Development, Mobile App Development, UI/UX Design, API Development, Software Testing, Product Management",
    site_name: "NeerStack",
}

useHead({
  title: computed(() => setdata.title),
  description: computed(() => setdata.description),
  keywords: computed(() => setdata.keywords),
  site_name: computed(() => setdata.site_name),
})

</script>
<style>
  html {
    scroll-behavior: smooth; /* set scroll-behaviour to smooth here */
  }
  :root {
    --primary: #4ade80;
    --primary-alt: #22c55e;
    --grey: #64748b;
    --dark: #1e293b;
    --dark-alt: #334155;
    --light: #f1f5f9;
    --sidebar-width: 300px;
    --black: #000;
    --black-alt: #232b2b
  }

  #__nuxt {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    justify-content: center;
    max-width: 100%;
    width: 100%;
    text-align: center;
    color: #2c3e50;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Fira sans", sans-serif, Arial, Helvetica, sans-serif;
  }
  .dark{
    background: var(--black);
  }


</style>
