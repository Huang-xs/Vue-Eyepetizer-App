import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vueAxios from 'vue-axios';
import axios from 'axios';
import './assets/js/rem.js';
import VueTouch from 'vue-touch';

// 引入播放器的依赖包
import VideoPlayer from 'vue-video-player';
import 'vue-video-player/src/custom-theme.css';
import 'video.js/dist/video-js.css'

// 轮播图插件
import "swiper/dist/css/swiper.css";
import "swiper/dist/js/swiper.js"


Vue.config.productionTip = false

Vue.use(vueAxios, axios);
Vue.use(VideoPlayer)

// 鼠标页面切换
Vue.use(VueTouch, { name: 'v-touch' })
VueTouch.config.swipe = {
    threshold: 50 //设置左右滑动的距离
}

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')