// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.filter("TimeFormat",function(time){
   const date=new Date(time);
   const year=date.getFullYear();
   const month=date.getMonth()+1;
   let day=date.getDay();
   day=day<10?"0"+day:day;
   const hours=date.getHours();
   const minutes=date.getMinutes();
   const seconds=date.getSeconds();
   return year+":"+month+":"+day+"  "+hours+":"+minutes+":"+seconds;
})
Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
