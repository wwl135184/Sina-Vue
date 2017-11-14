import Vue from "vue"
import Vuex from "vuex"
import VueRouter from "vue-router"
import $ from "jquery"
window.$ = $
import "./resource/css/base.css"
import "./resource/iconk/iconfont.css"
Vue.use(Vuex)
Vue.use(VueRouter)
//引入组件
import index from "./components/index.vue"
import tab1 from "./components/tab/tab1.vue"
import message from "./components/tab/message.vue"
import tab3 from "./components/tab/tab3.vue"
//import tab4 from "./components/tab/tab4.vue"
import login from "./components/login.vue"
import register from "./components/register.vue"
import sms from "./components/tab/tab2/sms.vue"
import email from "./components/tab/tab2/email.vue"
//var xheader = require("./components/xheader.vue")
let router = new VueRouter({
	routes: [{
		path: "/index",
		component: index,
		children: [{
			path: "tab1",
			component: tab1,
		}, {
			path: "message",
			component: message,
		}, {
			path: "tab3",
			component: tab3,
		}]
	}, {
		path: "/login",
		component: login,
	}, {
		path: "/register",
		component: register,
		children:[{
			path:"sms",
			component: sms,
		},{
			path:"email",
			component: email,
		},{
			path:'/register',
			redirect: "/register/sms"
		}]
	}, {
		path: "/",
		redirect: "/register"
	}]
})
let store = new Vuex.Store({
	state: {
		title: "vue-webpack"
	}
})

new Vue({
	el: "#index",
	store,
	router,
	data: {

	},
	template: `
		<router-view></router-view>
	`,
	components: {
		index
	}
})