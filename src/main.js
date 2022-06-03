import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./index.css";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(fas, far, fab);

import mitt from "mitt";

const emitter = mitt();

const app = createApp(App);

app.config.globalProperties.emitter = emitter;

/* add font awesome icon component */
app.component("FontAwesomeIcon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
