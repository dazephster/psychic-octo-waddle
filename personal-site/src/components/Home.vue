<script setup>
    
    const linkTo = (page) => {
        router.push({ name: page });
    }
</script>

<template>
  <div class="text d-flex justify-content-center align-items-center">
    <span>
      <span class="header">Hello!</span><br><br>
      I'm Austin, and this is my personal site I made to learn more about web dev,<br>and to showcase future projects.<br>
      Feel free to click on the links above to learn more about me,<br>
      or head over to the <router-link class="link" :to="'/contacts'"><span>Contacts</span></router-link> page to get in touch!</span>
      <span>
        <br><br>Also check out my<a class="link" target="_blank" href="https://docs.google.com/document/d/17Hc4-2s4jioYbK9P7fvx5zIdeq1qZ0P578Dr-Po5DSg/edit?usp=sharing">Resume</a>!
      </span>
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
    color: var(--color-primary);
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
  }
</style>