import { createRouter, createWebHashHistory } from "vue-router";
import MyHome from "./MyHome.vue";
import MyMovie from "./MyMovie.vue";
import MyAbout from "./MyAbout.vue";



const router = createRouter({
    // 指定路由的工作模式
    history: createWebHashHistory(),
    // 自定义路由高亮的 class 类
    linkActiveClass: 'activive-router',
    // 匹配规则
    routes: [
        {path: '/movie', component: MyMovie},
        {path: '/about', component: MyAbout},
        {path: '/home', component: MyHome}
    ]
})

export default router