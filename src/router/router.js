import HomePage from "@/views/HomePage";
import Vue from "vue";
import VueRouter from 'vue-router';


Vue.use(VueRouter);

let routes = [
    {path:'/', component: HomePage}
];

let router = new VueRouter({routes});




export default router;