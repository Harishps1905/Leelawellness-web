import { createApp } from 'vue';
import './style.css';
import router from './router/';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import store from './store/store';
import PrimeVue from "primevue/config";

AOS.init({
  duration: 1000,
  easing: 'ease',
});

const storedData = localStorage.getItem('leelashilajith');
if (storedData) {
  store.replaceState(JSON.parse(storedData));
}

// Create the app instance
const app = createApp(App);
app.use(store);
app.use(PrimeVue);
app.use(router);

// Mount the app to the DOM
app.mount('#app');

 