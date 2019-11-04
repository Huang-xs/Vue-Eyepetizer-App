import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';
import Community from '../views/Community.vue';
import Add from '../views/Add.vue';
import Inform from '../views/Inform.vue';
import Mine from '../views/Mine.vue';
import Discover from '../views/header/Discover.vue';
import Recommend from '../views/header/Recommend.vue';
import DailyPaper from '../views/header/DailyPaper.vue';
import Search from "../views/header/Search.vue"
import Push from "../views/header/Push.vue";
import Interaction from "../views/header/Interaction.vue";
import Privateletter from "../views/header/Privateletter.vue";
import RadioDetail from '../views/radiodetail/RadioDetail.vue';
Vue.use(VueRouter)
const routes = [
    { path: '/', redirect: '/index/recommend' },
    {
        path: '/index',
        redirect: '/index/recommend',
        component: Index,
        children: [{
                path: 'discover',
                name: 'discover',
                component: Discover
            }, {
                path: 'recommend',
                name: 'recommend',
                component: Recommend,
                children: [{
                    path: 'radioDetail',
                    name: 'radioDetail',
                    props: true,
                    component: RadioDetail
                }]
            },
            {
                path: 'dailyPaper',
                name: 'dailyPaper',
                component: DailyPaper
            },
            {
                path: "search",
                name: "search",
                component: Search
            }
        ]
    },
    {
        path: '/community',
        name: 'community',
        component: Community,
    },
    {
        path: '/add',
        name: 'add',
        component: Add
    },
    {
        path: '/inform',
        name: 'inform',
        redirect: '/inform/push',
        component: Inform,
        children: [{
                path: "push",
                name: "push",
                component: Push
            },
            {
                path: "interaction",
                name: "interaction",
                component: Interaction
            },
            {
                path: "privateletter",
                name: "privateletter",
                component: Privateletter
            },
            {
                path: "search",
                name: "search2",
                component: Search
            }
        ]
    },
    {
        path: '/mine',
        name: 'mine',
        component: Mine
    }
]
const router = new VueRouter({
    mode: 'history',
    routes,
    base: process.env.BASE_URL,
    linkActiveClass: "active"
})
export default router;