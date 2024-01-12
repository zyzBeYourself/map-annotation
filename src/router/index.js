import Vue from 'vue'
// 引入路由第三方包
import VueRouter from 'vue-router'
// 在vue项目中使用vue-router进行管理
Vue.use(VueRouter)


/**
 *   keepAlive: true,   //页面是否缓存
     deepth: 2,         // 页面层级(代表进入路由的层级,比如首页路由deepth是0.5,列表页是1,详情页是2)
     hiddenBottom:true,   //是否隐藏底部背景图(有的页面不需要，比如文章详情页面)
     isUseCache: false,   //控制在actived中是否刷新数据（当处于新增或修改状态时需要刷新列表数据）
     savedPosition:0,     //判断滚动条高度（列表页进入详情页，详情页的滚条位置会和列表页一致，所有需要给详情页清滚动条高度零）
 */


const routes = [{
	path: '/',
	component: () => import('@/views/index.vue')
}];

const router = new VueRouter({
	mode: 'history',
	// base: process.env.BASE_URL,
	routes,
})

export default router