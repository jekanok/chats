import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Uimini from "uimini/dist/css/uimini.css";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
