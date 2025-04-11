<script setup>
import TopNavBar from './components/TopNavBar.vue'

  document.documentElement.setAttribute("data-theme", "main");
</script>

<template>
  <header>
    <TopNavBar />
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style>
header {
  line-height: 1.5;
}

html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  height: 100%;
  font-family: 'Poppins', sans-serif;
}

main {
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100%;
}

main > router-view {
  flex-grow: 1;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.navbar {
  border-bottom: 1px solid var(--color-border);
}
</style>
