<template>
  <div class="mine-content">
    <div class="set">
      <div class="set-img">
        <img :src="`${publicPath}img/menu_more.png`" class="auto-img" />
      </div>
    </div>
    <div class="author-img">
      <div class="in-circle">
        <div class="img-box">
          <img :src="`${publicPath}img/focus_white.png`" class="auto-img" />
        </div>
      </div>
    </div>
    <div class="author-name">开眼用户_rye40s</div>
    <div class="author-main">
      <div class="personly">
        <div class="text">查看个人主页</div>
        <div class="personly-img">
          <img :src="`${publicPath}img/goto_icon.png`" class="auto-img" />
        </div>
      </div>
    </div>
    <div class="download">
      <div class="item">
        <div class="item-img">
          <img :src="`${publicPath}img/ic_grey_heart.png`" class="auto-img" />
        </div>收藏
      </div>
      <div class="item">
        <div class="item-img">
          <img :src="`${publicPath}img/download_icon.png`" class="auto-img" />
        </div>缓存
      </div>
    </div>
    <div
      v-for="(val,index) in setData"
      :key="index"
      class="set-text"
      @click="findHistory(index==1)"
    >
      {{val}}
      <span class="history" v-show="val=='观看记录'&&historyNum">{{historyNum}}</span>
    </div>

    <History v-show="showHistory" @back="findHistory(false)"></History>
  </div>
</template>

<script>
import History from '../components/History';
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      setData: ["我的关注", "观看记录", "通知开关", "我的徽章", "意见反馈"],
      historyNum: 0,
      showHistory:false
    };
  },
  components:{
    History
  },
  methods: {
    findHistory(v) {
      if(v){
        this.showHistory = v;
      // this.$router.push({})
      }else{
        this.showHistory = v;
      }
      
    }
  },
  mounted() {
    let num = JSON.parse(localStorage.getItem("history"));
    if (num == null) {
      return;
    } else {
      this.historyNum = num.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.set {
  width: 100%;
  overflow: hidden;
  .set-img {
    float: right;
    width: 1.32rem;
    height: 1.32rem;
  }
}
.author-img {
  width: 2rem;
  height: 2rem;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #b2b2b2;
  margin-bottom: 0.4rem;
  .in-circle {
    position: relative;
    width: 1.9rem;
    height: 1.9rem;
    margin: 0.05rem auto;
    border-radius: 50%;
    background-color: #dddddd;

    .img-box {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 1rem;
      height: 0.6rem;
      background-color: #ddd;
      margin: auto;
    }
  }
}
.author-name {
  text-align: center;
  font-size: 19px;
  color: #000;
  font-weight: 700;
  margin-bottom: 0.3rem;
}
.personly {
  position: relative;
  width: 40%;
  margin: 0 auto 0.5rem;
  .text {
    line-height: 0.8rem;
  }
  .personly-img {
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    top: 0;
    right: 0px;
    vertical-align: middle;
  }
}
.download {
  height: 1rem;
  display: flex;
  margin-bottom: 0.4rem;
  border-bottom: 1px solid #b2b2b2;
  padding-bottom: 0.3rem;
  .item {
    flex: 1;
    line-height: 1rem;
    font-size: 16px;
    &:first-child {
      border-right: 1px solid #b2b2b2;
    }
    .item-img {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      vertical-align: bottom;
    }
  }
}
.set-text {
  text-align: center;
  margin: 1rem 0;
  font-size: 16px;
  color: darkgray;
  .history {
    color: #ff0000;
  }
}
</style>