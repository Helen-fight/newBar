// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

import "./assets/css/reset.scss";
import "./assets/js/rem.js";

import MintUI from "mint-ui";
import "mint-ui/lib/style.css";

import request from "@/assets/js/request";

Vue.use(MintUI);

Vue.prototype.request = request.request;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
