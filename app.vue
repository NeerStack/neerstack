<template>
  <div class="app dark:bg-slate-800 min-h-screen dark:text-white">
    <NuxtLayout name="default">
      <NuxtPage :key="$route.fullPath" />
    </NuxtLayout>
  </div>
</template>
<script setup>

</script>
<style>
  :root {
    --primary: #4ade80;
    --primary-alt: #22c55e;
    --grey: #64748b;
    --dark: #1e293b;
    --dark-alt: #334155;
    --light: #f1f5f9;
    --sidebar-width: 300px;
    --black: #000;
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
  html.dark{
    background: var(--dark);
  }

  body {
    background: var(--light);
  }
  body.dark {
    background: var(--dark);
  }
  div.navigation {
    background: var(--light);
  }
  div.navigation.dark {
    background: var(--black);
  }
  @media (min-width: 390px){
    body{
      font-size: 1.0em;
    }
  }
</style>
