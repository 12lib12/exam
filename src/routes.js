import HomePage from "./components/pages/HomePage.vue";
import ShopPage from "./components/pages/ShopPage.vue";
import LoginPage from "./components/pages/LoginPage.vue";
import SignupPage from "./components/pages/SignupPage.vue";
import DetailPage  from "./components/pages/DetailPage.vue"


export const routes = [
    { path: "/", name: "homepage", component: HomePage },
    { path: "/shoppage", name:"shoppage", component: ShopPage },
    { path: "/login", name: "login", component: LoginPage },
    { path: "/signup", name: "signup", component: SignupPage},
    { path: "/detail", name: "detailPage", component: DetailPage }
]