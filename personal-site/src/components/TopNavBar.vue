<script setup>

const NavOptions = [
  { name: 'Home', link: '/home' },
  { name: 'About', link: '/about' },
  { name: 'Projects', link: '/projects' },
  { name: 'Hobbies', link: '/hobbies' },
  { name: 'Contacts', link: '/contacts' },
]
</script>

<template>
  <div class="container">
    <div class="row align-items-center">
        <div class="col-4 col-sm-2 logo-container">
          <img alt="logo" class="picture" src="/images/main1to1.jpg" width="100" height="100" />
        </div>
        <div class="col-8 col-sm-10">
          <div class="row">
            <router-link
              v-for="option in NavOptions"
              :key="option.name"
              :to="option.link"
              class="col nav-link"
            >
              <span class="hover-underline-animation center option">{{ option.name }}</span>
            </router-link>
          </div>
        </div>
        <!-- <div class="col-1 settings-icon"> Keeping for later maybe
          <router-link :to="'/settings'" class="gear">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
            </svg>
          </router-link>
        </div> -->
    </div>
  </div>
</template>

<style scoped>
  .container {
    border-bottom: 2px solid var(--color-border);
    padding-bottom: 8px;
  }

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    z-index: 10;

    .picture {
      border-radius: 100%;
      border: 5px solid var(--color-primary);
    }
  }

  .nav-link {
    background: var(--color-background);
    text-align: center;
    font-size: 18px;
    color: var(--color-text);
  }

  .option {
    padding-left: 4px;
    padding-right: 4px;
  }

  .hover-underline-animation {
    display: inline-block;
    position: relative;
    transition: 0.25s;

  }

  .hover-underline-animation::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--color-secondary);
    transition: transform 0.25s ease-out;
  }

  .hover-underline-animation:hover {
    color: var(--color-analogous);
    cursor: pointer;
  }

  .hover-underline-animation:hover::after {
    transform: scaleX(1);
  }

  .hover-underline-animation.center::after {
    transform-origin: bottom center;
  }

  .hover-underline-animation.center:hover::after {
    transform-origin: bottom center;
  }

  .settings-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .gear {
    color: inherit;
  }
</style>
