import HomePage from "@/views/HomePage";
import Vue from "vue";
import VueRouter from 'vue-router';
import LoginPage from "@/views/LoginPage";
import signupPage from "@/views/Signup-Page";
import browsingPage from "@/views/BrowsingPage";
import createPage from "@/views/CreatePage";
import userSets from "@/views/UserSets";
import accountPage from "@/views/AccountPage";
import frequentlyAskedQuestions from "@/views/FrequentlyAskedQuestions";


Vue.use(VueRouter);

let routes = [
    {path:'/', component: HomePage},
    {path: '/login-page',component: LoginPage},
    {path: '/signup-page',component: signupPage},
    {path: '/browse-items',component: browsingPage},
    {path: '/create-page',component: createPage},
    {path: '/my-sets',component: userSets},
    {path: '/account-page',component: accountPage},
    {path: '/FAQ',component: frequentlyAskedQuestions}
];

let router = new VueRouter({routes});




export default router;