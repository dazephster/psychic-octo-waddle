import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/base.css'
import 'bootstrap'
//ex: import Home from '@/views/Home.vue'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Contacts from './components/Contacts.vue'
import Projects from './components/Projects.vue'
import About from './components/About.vue'
import Hobbies from './components/Hobbies.vue'
import Settings from './components/Settings.vue'
import '@fontsource/poppins';

const basePath = '/psychic-octo-waddle';

const router = createRouter({
    history: createWebHistory(basePath),
    routes: [
        {path: '/', redirect: '/home'},
        {path: basePath, redirect: '/home'},
        {path: '/home', name:'Home', component: Home},
        {path: '/about', name:'About', component: About},
        {path: '/projects', name:'Projects', component: Projects},
        {path: '/contacts', name:'Contacts', component: Contacts},
        {path: '/hobbies', name:'Hobbies', component: Hobbies},
        {path: '/settings', name:'Settings', component: Settings},
    ],
})

const vIntersect = {
    mounted(el) {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                el.classList.add('animate');
                observer.unobserve(el);
            }
        }, {threshold: 0.2});
        observer.observe(el);
    }
};

const app = createApp(App);
app.use(router)
app.directive('intersect', vIntersect)
app.config.globalProperties.$route = '/psychic-octo-waddle';
app.mount('#app');
