import { createApp } from 'vue';
import { createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import Error404 from './components/error/404.vue';
import TeamFooter from './components/teams/TeamFooter.vue';
import UserFooter from './components/users/UserFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/teams'
        },
        {
            name : `teams`,
            path: '/teams',
            meta : {
                needsAuth : true,
            },
            components: {
                default : TeamsList,
                footer : TeamFooter,
            },
            children: [
                {
                    name: `team-members`,
                    path: ':teamId',
                    component: TeamMembers,
                    props: true,
                },        
            ]
        },
        {
            name : `users`,
            path: '/users',
            component: UsersList,
            components: {
                default : UsersList,
                footer : UserFooter,
            },
            // beforeEnter: (to, from, next) => {
            //     console.log("before enter users");
            //     console.log(to, from);
            //     let con = prompt("message ?");
            //     if (con == "okeh") {
            //         next();
            //     } else {
            //         alert("You are not alowed to enter");
            //         next({
            //             name : 'teams',
            //         });
            //     }
            // }
        },
        {
            path: '/:notFound(.*)',
            component: Error404,
        }
    ],
    linkActiveClass: `router-link-active`,
    scrollBehavior (to, from, savedPosition) {
        to;
        from;
        if (savedPosition) {
            return savedPosition;
        }
        return {
            left : 0,
            top : 0,
        }
    }
});

router.beforeEach(function(to, from, next) {
    to;
    from;
    next();
    if (to.meta.needsAuth) {
        console.log("NEEDS AUTH");
    }
    // if (to.name === `users`) {
    //     next();
    // } else {
    //     next({
    //         name: `users`,
    //     });
    // }
});

router.afterEach((to, from) => {
    // to and from are both route objects.
    console.log("Global After Each");
    console.log(to, from);
})

const app = createApp(App)

app.use(router);
app.mount('#app');
