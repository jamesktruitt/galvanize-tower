import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import TopicDetail from "./views/TopicDetail.vue";
import TopicIndex from "./views/Index.vue";
import SignIn from "./views/SignIn.vue";

Vue.use(Router)

export default new Router({
    routes: [{
        path: "/",
        name: "signIn",
        component: SignIn
    },{
        path: "/artists",
        component: Home,
        children: [{
            name: "topicIndex",
            path: "/",
            component: TopicIndex
        },{
            name: "topicDetail",
            path: "artists/:topic_id",
            component: TopicDetail
        }]
    }]
})
