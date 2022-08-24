import HomePage from "@/views/HomePage";
import Vue from "vue";
import VueRouter from 'vue-router';
import LoginPage from "@/views/LoginPage";
import signupPage from "@/views/Signup-Page";
import browsingPage from "@/views/BrowsingPage";
import createPage from "@/views/CreatePage";


Vue.use(VueRouter);

let routes = [
    {path:'/', component: HomePage},
    {path: '/login-page',component: LoginPage},
    {path: '/signup-page',component: signupPage},
    {path: '/browse-items',component: browsingPage},
    {path: '/create-page',component: createPage}
];

let router = new VueRouter({routes});




export default router;