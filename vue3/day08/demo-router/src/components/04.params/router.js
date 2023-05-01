import {createRouter, createWebHashHistory} from "vue-router";
import Home from './MyHome.vue'
import Movie from './MyMovie.vue'
import About from './MyAbout.vue'

import Tab1 from './tabs/MyTab1.vue'
import Tab2 from './tabs/MyTab2.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/about', component: About,
            children: [{path: 'tab1', component: Tab1},
                {path: 'tab2', component: Tab2}]
        },
        {path: '/home', component: Home},
        {path: '/movie/:id', component: Movie,
        },
    ]
})

export default router

