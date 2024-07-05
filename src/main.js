import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'toastr/build/toastr.min.css';
import BootstrapVueNext from 'bootstrap-vue-next';

const app = createApp(App);

app.use(router);
app.use(BootstrapVueNext);

app.mount('#app');