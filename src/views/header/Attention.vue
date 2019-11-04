<template>
  <div class="community-follow" ref="scrollBar">
    <div>
      <div class="follow">
        <div class="item">
          <div class="follow-img">
            <img :src="`${publicPath}img/ic_app.png`" class="auto-img" />
          </div>
        </div>
        <div class="item all-follow">
          <span class="text">
            全部
            <br />关注
          </span>
          <span class="img">
            <img :src="`${publicPath}img/goto_icon.png`" class="auto-img" />
          </span>
        </div>
      </div>
      <div class="content" v-for="(v,i) in attendData" :key="i" @click="attendvideo(v)">
        <div class="content-top">
          <div class="content-img">
            <img :src="`${publicPath}img/ic_app.png`" class="auto-img" />
          </div>
          <div class="content-text">
            <div class="title">开眼 Eyepetizer</div>
            <div>发布:</div>
          </div>
        </div>
        <div class="content-decrition">{{v.data.content.data.description}}</div>
        <div class="decrition-img">
          <img :src="v.data.content.data.cover.feed" class="auto-img" alt />
        </div>
        <div class="decrition-topic">
          <div class="both topic">
            <div class="topic1">#{{v.data.content.data.category}}</div>
            <div class="topic2">{{v.data.content.data.title}}</div>
          </div>
          <div class="both join-btn">+ 立即参与</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      attendData: []
    };
  },
  methods: {
    attendvideo(v) {
      let val = v.data.content;
      this.$router.push({ name: "radioDetail", params: { val } });
    },
    getData() {
      this.$http("/api/v6/community/tab/follow").then(res => {
        let { data } = res;
        this.attendData = data.itemList;
      });
    },
    _Scroll() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.scrollBar, {
          scrollY: true,
          click: true,
          // 下拉刷新
          pullDownRefresh: {
            threshold: 30, // 下拉距离超过30px触发pullingDown事件
            stop: 20 // 回弹停留在距离顶部20px的位置
          },
          pullUpLoad: true
        });
        this.scroll.on("pullingDown", () => {
          console.log("处理下拉刷新操作");
          this.getData();
          // this.scroll.refresh(); // DOM 结构发生变化后，重新初始化BScroll
          this.scroll.finishPullDown(); // 下拉刷新动作完成后调用此方法告诉BScroll完成一次下拉动作
        });
        this.scroll.on("pullingUp", () => {
          this.$http(
            "/api/v6/community/tab/follow?start=10&num=10&newest=true"
          ).then(res => {
            let dataArr = res.data.itemList;
            if (this.attendData.length === dataArr.length) {
              this.attendData = [...this.attendData, ...dataArr];
            }
            console.log(this.attendData);
          });
          this.scroll.finishPullUp();
        });
      });
    }
  },
  mounted() {
    this._Scroll();
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/mixin.scss";

.community-follow {
  padding: 0.4rem;
  height: 480px;
  overflow: hidden;
  .follow {
    width: 100%;
    display: flex;
    @include scale-border-bottom(#ddd);
    padding-bottom: 0.2rem;
    .item {
      flex: 0 0 50%;
    }
    .follow-img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      border: 1px solid #b2b2b2;
      overflow: hidden;
    }
    .all-follow {
      .text {
        float: left;
        width: 88%;
        text-align: right;
        line-height: 0.5rem;
        color: #3d73bc;
      }
      .img {
        float: right;
        width: 0.5rem;
        height: 1rem;
      }
    }
  }
  .content-top {
    padding: 0.5rem 0 0.2rem;
    overflow: hidden;
    .content-img {
      float: left;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      border: 1px solid #ddd;
      overflow: hidden;
      margin-right: 0.4rem;
    }
    .content-text {
      float: left;
      text-align: left;
      line-height: 0.6rem;
      .title {
        font-size: 16px;
        color: #000;
      }
    }
  }
  .content-decrition {
    width: 100%;
    text-align: left;
    font-size: 16px;
    color: #000;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .decrition-img {
    border-radius: 5px;
    overflow: hidden;
    margin: 0.5rem 0;
  }
  .decrition-topic {
    display: flex;
    .both {
      flex: 1;
    }
    .topic {
      text-align: left;
      .topic1 {
        font-size: 16px;
        color: #000;
      }
      // .topic2{
      //   overflow: hidden;
      //   text-overflow: ellipsis;
      //   white-space: nowrap;
      // }
    }
    .join-btn {
      text-align: right;
      color: #3d73bc;
    }
  }
}
</style>