import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from "./router";

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/vuejs-axios-15c6b/databases/(default)/documents";
//axios.defaults.headers.common["Authorization"] = "トークンID等";
//axios.defaults.headers.get["Accept"] = "application/json";

// const interceptorRequest = axios.interceptors.request.use(
axios.interceptors.request.use(
  config => {
    config.headers['aaaaaaa'] = 'bbbbbbb'
    return config;
  },
  error => {
    return Promise.reject(error); // ←catchの処理へ
  }
);

// const interceptorsResponse = axios.interceptors.response.use(
axios.interceptors.response.use(
  response => {
    response.headers['aaaaaaaa'] = 'bbbbbb' // ←App.vueのmethodsのresponseにつながる
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

// ↓上の機能を無くす
// axios.interceptors.request.eject(interceptorRequest);
// axios.interceptors.request.eject(interceptorsResponse);

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
