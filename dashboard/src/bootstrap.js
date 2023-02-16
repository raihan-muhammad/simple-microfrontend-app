import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

if (process.env.NODE_ENV !== "production") {
  const el = document.querySelector(`#_dev-dashboard`);

  if (el) {
    mount(el);
  }
}

export { mount };
