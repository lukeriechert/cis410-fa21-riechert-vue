import {createStore} from 'vuex';
import axios from 'axios';
import myRoutes from "./routes.js";

export default createStore({
    state: {
        token: null,
        user: null,
        players: []
    },
    mutations: {
        storeTokenInApp(state, myToken){
            state.token = myToken;
        },
        storeUserInApp(state, theUser){
            state.user = theUser;
        },
        storePlayers(state, players){
            state.players = players;
        },
        clearAuthData(state){
            state.token = null;
            state.user = null;
        }
    },
    actions: {
        getPlayers({commit}){
            axios.get("/players").then((aResponse)=>{
                console.log("response in /players", aResponse);
                commit("storePlayers", aResponse.data)
            });
        },
        logout({commit, state}){
            axios.post("/scouts/logout",null,{
                headers: {Authorization: `Bearer ${state.token}`}
            }).then(()=>{
                commit("clearAuthData");
                myRoutes.replace("/");
            }).catch(()=>{console.log("error in loging out")});
        },
    },
});