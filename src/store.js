import {createStore} from 'vuex';
import axios from 'axios';

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
    },
    actions: {
        getPlayers({commit}){
            axios.get("/players").then((aResponse)=>{
                console.log("response in /players", aResponse);
                commit("storePlayers", aResponse.data)
            });
        },
    },
});