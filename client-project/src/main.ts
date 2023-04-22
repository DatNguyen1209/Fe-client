import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@/scss/style.scss";

// import "@morioh/v-lightbox/dist/lightbox.css";

// import Lightbox from "@morioh/v-lightbox";

const app = createApp(App);

app.use(router);
app.use(vuetify).mount("#app");
