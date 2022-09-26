import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter : 0,
            isLoggedIn : false,
        }
    },
    mutations: {
        increment(state){
            state.counter += 2;
        },
        incrementWithValue(state, payload){
            state.counter += payload.value;
        },
        setAuth(state, payload){
            state.isLoggedIn = payload.isAuth;
        }
    },
    actions: {
        increment(context) {
            context.commit(`increment`);
        },
        incrementWithValue(context, payload){
            console.log(payload);
            context.commit(`incrementWithValue`, payload);
        },
        login(context) {
            context.commit('setAuth', {isAuth : true});
        },
        logout(context) {
            context.commit('setAuth', {isAuth : false });
        }
    },
    getters: {
        finalCounter(state){
            return state.counter * 2;
        },
        normalizeCounter(_, getters){
            const finalCounter = getters.finalCounter;
            if (finalCounter < 0 ) {
                return 0;
            }
            if (finalCounter > 100) {
                return 100;
            }
            return finalCounter;
        },
        userIsAuthenticated(state){
            return state.isLoggedIn;
        }
    },

});

const app = createApp(App);

app.use(store);
app.mount('#app');
