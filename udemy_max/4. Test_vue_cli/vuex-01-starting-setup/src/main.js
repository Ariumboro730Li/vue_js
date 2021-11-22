import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter : 0
        }
    },
    mutations: {
        increment(state){
            state.counter += 2;
        },
        incrementWithValue(state, payload){
            state.counter += payload.value;
        },
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
        }
    }
});

const app = createApp(App);

app.use(store);
app.mount('#app');
