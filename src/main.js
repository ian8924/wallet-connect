import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import * as Sentry from "@sentry/vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

Sentry.init({
  app,
  dsn: "https://3cc60939706613077c4a367731cbc7d3@o4508487051902976.ingest.us.sentry.io/4508487063175168",
  integrations: [Sentry.browserTracingIntegration()],
  tracesSampleRate: 1.0,
});

app.use(createPinia());
app.use(router);

app.mount("#app");
