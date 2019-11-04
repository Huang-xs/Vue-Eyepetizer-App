<template>
  <div class="recommend" ref="recommendScroll">
    <!-- {{recom}} -->
    <router-view></router-view>
    <!-- <h2>头部推荐</h2> -->
    <!-- 每日精选 -->
    <ChoiceNess :recomitem="recom" :current="currentIndex"></ChoiceNess>
    <!-- 5分钟新知 -->
    <!-- <div class="new-knowledge">
      <div>5分钟新知</div>
      <div>关注</div>
    </div> -->
  </div>
</template>

<script>

// 组件被复用后是独立的，可通过在推荐中只显示当天的前3个，
// 而在日报中就渲染前两天的数据，其他可通过懒加载来渲染

// import Bscroll from 'better-scroll';
import { getTemplateTimeString } from "../../assets/js/tool";
import ChoiceNess from "../../components/ChoiceNess.vue"

export default {  
  props:["itemList","recom","currentIndex"],
  data: () => ({
    publicPath: process.env.BASE_URL,
  }),
  methods: {
    // _recomScroll(){
    //       new Bscroll(this.$refs.recommendScroll,{
    //         scrollY:true
    //       })
    // },
    dealTime(time, template) {
      return getTemplateTimeString(time, template);
    },
  },
  components:{
    ChoiceNess
  },
  mounted() {
    // this._recomScroll();
    
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin";
.recommend {
  padding: 0.4rem;
  height: calc(100% - 1.8rem);
  overflow: auto;
  
}
</style>