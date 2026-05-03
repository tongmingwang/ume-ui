import { createApp } from 'vue';
import App from './App.vue';
import ume from '../packages/ume-ui';
import router from './router/index';
import '../packages/global/index';

const app = createApp(App);
app.use(ume);
app.use(router);

app.mount('#app');
