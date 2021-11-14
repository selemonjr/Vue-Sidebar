import {createRouter,createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
const router = createRouter({
    history:createWebHistory(),
    routes:[{
        path:"/",
        component:Home,
    },
    {
        path:"/about",
        component:About
    },
    {
        path:"/contact",
        component:Contact,
    }
]
});
export default router;