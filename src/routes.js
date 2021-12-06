import {createRouter, createWebHistory} from 'vue-router';

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import PlayerDetail from "./components/PlayerDetail.vue";
import Players from "./components/Players.vue";
import NotFound from "./components/NotFound.vue";
import ReportCreate from "./components/ReportCreate.vue";
import Signup from "./components/Signup.vue";
import Account from "./components/Account.vue"
import myStore from "./store.js";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: Home},
        {path: "/account", component: Account, beforeEnter(to,from,next){
            if(myStore.state.token){next();}else{
                next("/login")
            }
        }},
        {path: "/login", component: Login},
        {path: "/players", component: Players},
        {path: "/players/:pk", component: PlayerDetail,
            children: [{path: "report", component: ReportCreate}]},
        {path: "/signup", component: Signup},
        {path: "/:invalidroute(.*)", component: NotFound},
    ],
});

export default router;