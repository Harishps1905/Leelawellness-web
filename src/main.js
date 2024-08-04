import { createApp } from 'vue';
import './style.css';
import router from './router/';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import store from './store/store';

const storedData = localStorage.getItem('leelashilajith');
if (storedData) {
  store.replaceState(JSON.parse(storedData));
}

// Create the app instance
const app = createApp(App);
app.use(store);
// Use the router
app.use(router);

// Mount the app to the DOM
app.mount('#app');

// Initialize AOS (Animate On Scroll) library
AOS.init({
    duration: 1200,
    easing: 'ease',
});
