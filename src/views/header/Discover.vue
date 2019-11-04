<template>
  <div class="discover-router" ref="scrollAll">
    <div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(val,index) in imgUrl" :key="index">
            <img :src="val" class="auto-img" />
          </div>
          <!-- <div class="swiper-pagination"></div> -->
        </div>
      </div>
      <!-- 热门分类 -->
      <div class="discover-classly">
        <Titlenav :titleType="`热门分类`"></Titlenav>
        <div class="classly" ref="scrollbanner">
          <div class="classly-list">
            <div class="classly-img" v-for="(v,i) in allClassly" :key="i" v-show="v.data.id>1">
              <img v-show="v.data.image" :src="v.data.image" class="auto-img" />
              <p class="text">{{v.data.title}}</p>
            </div>
          </div>
        </div>

        <!-- 专题策划 -->
        <Titlenav :titleType="`专题策划`"></Titlenav>
        <div class="special" v-if="discoverBwanner.itemList !== undefined">
          <div
            class="special-img"
            v-for="(el,j) in discoverBwanner.itemList[4].data.itemList"
            v-show="el.data.id!=472"
            :key="j"
          >
            <img :src="el.data.image" class="auto-img" />
          </div>
        </div>

        <!-- 开眼专栏 -->
        <Titlenav :titleType="`开眼专栏`"></Titlenav>
        <div class="special-column" v-if=" discoverBwanner.itemList !== undefined">
          <img
            v-if="discoverBwanner.itemList[4].data.itemList[0]"
            :src="discoverBwanner.itemList[4].data.itemList[0].data.image"
            class="auto-img"
          />
        </div>
        <!-- 本周榜单 -->
        <!-- <Titlenav :titleType="`本周榜单`"></Titlenav> -->
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Swiper from "swiper";
import Titlenav from "../../components/TitleNav";

export default {
  data: () => ({
    discoverBwanner: {},
    publicPath: process.env.BASE_URL,
    imgUrl: [],
    allClassly: []
  }),
  watch: {
    imgUrl() {
      if (this.imgUrl.length) {
        this.$nextTick(() => {
          this._swiperScroll();
        });
      }
    }
  },
  components: {
    Titlenav
  },
  methods: {
    _swiperScroll() {
      new Swiper(".swiper-container", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 2.4,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      });
    },
    _classScroll() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.scrollAll, {
          scrollY: true,
          click: true
        });
      });
    }
  },
  mounted() {
    //  滑动轮播
    this._swiperScroll();
    this._classScroll();

    this.$http("/api/v4/tabs/discovery?type=banner").then(res => {
      let { data } = res;
      this.discoverBwanner = data;
      console.log("discoverBwanner", this.discoverBwanner);

      // 获取横向图片数据中的链接地址
      let imgarr = data.itemList[0].data.itemList;

      for (let i = 0; i < imgarr.length; i++) {
        this.imgUrl.push(imgarr[i].data.image);
      }
    });

    this.$http("/api/v4/categories/all").then(res => {
      this.allClassly = res.data.itemList;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin.scss";
.swiper-container {
  margin: 0.3rem 0 0;
  .swiper-slide {
    width: 90% !important;
    transform: translate3d(0px, 0px, 0px) !important;
    border-radius: 5px;
    overflow: hidden;
  }
}
.discover-router {
  height: calc(100% - 1.2rem);
  overflow-y: auto;
  .discover-classly {
    padding: 0 0.4rem;
  }
  .classly {
    width: 100%;
    padding-bottom: 0.3rem;
    @include scale-border-bottom(#ddd);
  }
  .classly-list {
    display: flex;
    overflow: auto;
    justify-content: space-between;
    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
    .classly-img {
      position: relative;
      flex: 0 0 30%;
      width: 3rem;
      height: 3rem;
      margin-right: 0.15rem;
      // margin-top: 0.3rem;
      & > img {
        border-radius: 5px;
      }
    }
    .text {
      width: 100%;
      position: absolute;
      top: 0;
      line-height: 3rem;
      text-align: center;
      color: #fff;
      font-weight: 600;
    }
  }

  .special {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 0.2rem;
    @include scale-border-bottom(#ddd);
    .special-img {
      flex: 0 0 49.5%;
      margin-bottom: 0.1rem;
      border-radius: 5px;
      overflow: hidden;
    }
  }
  .special-column {
    border-radius: 5px;
    overflow: hidden;
  }
}
</style>