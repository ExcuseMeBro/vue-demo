import { defaultConfig, plugin } from "@formkit/vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from "vue";
import "./assets/tailwind.css";
import config from "../formkit.config.js";
import App from "./App.vue";

const app = createApp(App);

app.use(plugin, defaultConfig(config));
app.use(VueQueryPlugin);
app.mount("#app");
