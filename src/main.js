import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { createPinia } from "pinia";
import { router } from "./router";
import "./shared/services/validator";
import "vue-toast-notification/dist/theme-sugar.css";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "vue3-carousel/dist/carousel.css";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
