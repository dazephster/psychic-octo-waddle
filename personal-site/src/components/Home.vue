<script setup>
    
    const linkTo = (page) => {
        router.push({ name: page });
    }
</script>

<template>
  <div class="text d-flex justify-content-center align-items-center">
    <span>
      <span class="header">Hello!</span><br><br>
      I am Austin Lee, and this is my personal site.<br>
      Feel free to click on the links above to learn more about me,<br>
      or head over to the <router-link :to="'/contacts'"><span class="link">Contacts</span></router-link> page to get in touch!</span>
  </div>
</template>

<style scoped>
  .text {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
    text-align: center;
  }

  .header {
    font-size: 24px;
    font-weight: 700;
  }

  .link {
    color: white;
    cursor: pointer;
    font-weight: 500s;
  }
</style>