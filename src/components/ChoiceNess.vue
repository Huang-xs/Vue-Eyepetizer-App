<template>
  <div class="recom-banner" ref="scrollNess">
    <div>
      <div class="recom-top">
        <div class="title" v-if="current==1">每日开眼精选</div>
        <div class="title" v-else>今日开眼精选</div>
        <div class="find-previous" v-show="current==1">
          查看往期
          <span class="previous-icon"></span>
        </div>
      </div>
      <!-- {{recomitem}} -->
      <div class="previous-content">
        <!-- 渲染视频 -->
        <div class="content" v-for="(val,index) in recomitem" :key="index">
          <!-- 图片 -->
          <div
            class="img-box"
            v-if="current==1?(val.type === 'video' && val.tag==='0'):val.type === 'video'"
            @click="videoPlay(val)"
          >
            <img :src="val.data.cover.detail" class="auto-img" />
            <span class="detail-icon">
              <img :src="`${publicPath}img/daily_label.png`" class="auto-img" />
            </span>
            <span class="detailvideo-time">{{dealTime(val.data.duration*1000,"mm:ss")}}</span>
          </div>
          <!-- 视频描述 -->
          <div
            class="previous-decrition"
            v-if="current==1?(val.type === 'video' && val.tag==='0'):val.type === 'video'"
          >
            <div class="author-icon">
              <img :src="val.data.author.icon" class="auto-img" />
            </div>
            <div class="decrition-content">
              <div class="decrition-title">{{val.data.title}}</div>
              <div class="decrition-name">{{val.data.author.name}} / #{{val.data.category}}</div>
            </div>
            <div class="download-icon">
              <img :src="`${publicPath}img/action_icon.png`" class="auto-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { getTemplateTimeString } from "../assets/js/tool";

export default {
  props: ["recomitem", "current"],
  data: () => ({
    publicPath: process.env.BASE_URL,
    historyArr: []
  }),
  // watch:{
  //   current(newVal,oldVal){
  //     this.current = 2
  //     console.log(newVal);
  //     console.log(oldVal);
  //   }
  // },
  methods: {
    dealTime(time, template) {
      return getTemplateTimeString(time, template);
    },
    videoPlay(val) {
      let hisArr = JSON.parse(localStorage.getItem("history"));

      if (hisArr === null) {
        this.historyArr.unshift(val);
        localStorage.setItem("history", JSON.stringify(this.historyArr));
      } else {
        for (let i = 0; i < hisArr.length; i++) {
          if (hisArr[i].data.id == val.data.id) {
            console.log("i=>",i);
            this.$router.push({ name: "radioDetail", params: { val } });
            return
          }
        }
        hisArr.unshift(val);
        localStorage.setItem("history", JSON.stringify(hisArr));
      }
      this.$router.push({ name: "radioDetail", params: { val } });
    },
    _classScroll() {
      this.$nextTick(() => {
        new BScroll(this.$refs.scrollNess, {
          scrollY: true,
          click: true
        });
      });
    }
  },
  mounted() {
    // localStorage.setItem("history", JSON.stringify(this.historyArr));
    this._classScroll();
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixin";
.recom-top {
  width: 100%;
  height: 25px;
  line-height: 25px;
  overflow: hidden;
  margin-bottom: 5px;
  .title {
    float: left;
    color: #000;
    font-size: 20px;
    font-weight: 700;
  }
  .find-previous {
    float: right;
    color: #3c79d0;
  }
  .previous-icon {
    float: right;
    width: 0.3rem;
    height: 0.3rem;
    background: url("/img/arrow_right.png") center;
    margin-top: 7px;
  }
}
.previous-content {
  .img-box {
    position: relative;
    width: 100%;
    height: 50%;
    border-radius: 5px;
    overflow: hidden;
    margin: 0.3rem 0;
    .detail-icon {
      display: block;
      width: 1.25rem;
      height: 1.25rem;
      position: absolute;
      top: 10px;
      left: 10px;
    }
    .detailvideo-time {
      position: absolute;
      display: block;
      bottom: 5px;
      right: 5px;
      font-size: 12px;
      font-weight: bold;
      color: #fff;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 3px;
      padding: 2px;
    }
  }
  .previous-decrition {
    display: flex;
    padding: 0 0.2rem 0.2rem;
    // border-bottom: 1px solid #b2b2b2;
    @include scale-border-bottom(#b2b2b2);
  }
  .author-icon {
    float: left;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .decrition-content {
    width: calc(100% - 2.1rem);
    text-align: left;
    padding: 0 0.2rem;
    .decrition-title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 0.1rem;
      color: #000;
      font-weight: 600;
    }
  }
  .download-icon {
    float: left;
    width: 0.7rem;
    height: 0.7rem;
  }
}
</style>