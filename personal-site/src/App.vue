<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import TopNavBar from './components/TopNavBar.vue'
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
  /* display: flex; */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.navbar {
  border-bottom: 1px solid var(--color-border);
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
