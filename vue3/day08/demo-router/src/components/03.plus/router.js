import {createRouter, createWebHashHistory} from "vue-router";
import MyHome from "./MyHome.vue";
import MyAbout from "./MyAbout.vue";
import MyMovie from "./MyMovie.vue";
import MyTab1 from "./tabs/MyTab1.vue";
import MyTab2 from "./tabs/MyTab2.vue";


const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: 'activite-router',
    routes: [{path: '/', redirect: '/home'},
        {
            path: '/about',
            component: MyAbout,
            // 嵌套路由的重定向
            redirect: '/about/tab1',
            // 通过 children 属性嵌套声明子级路由规则
            children: [
                {path: 'tab1', component: MyTab1},
                {path: 'tab2', component: MyTab2},
            ],
        },
        {path: '/movie', component: MyMovie},
        {path: '/home', component: MyHome}]
})

export default router