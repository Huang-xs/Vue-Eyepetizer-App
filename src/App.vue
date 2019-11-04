<template>
  <div id="app">
    <router-view></router-view>

    <div class="footer-barner">
      <router-link class="barner-item" to="/index" tag="div">
        <span class="index index-icon2">
          <!-- <img :src="`${publicPath}img/index.png`" class="auto-img" /> -->
        </span>
        <span>首页</span>
      </router-link>

      <router-link class="barner-item" to="/community" tag="div">
        <span class="index index-icon3">
          <!-- <img :src="`${publicPath}img/follow.png`" class="auto-img" /> -->
        </span>社区
      </router-link>

      <router-link class="barner-item" to="/add" tag="div">
        <span class="index-icon"></span>
      </router-link>

      <router-link class="barner-item" to="/inform" tag="div">
        <span class="index index-icon4">
          <!-- <img :src="`${publicPath}img/category.png`" class="auto-img" /> -->
        </span>
        通知
      </router-link>
      <router-link class="barner-item" to="/mine" tag="div">
        <span class="index index-icon5">
          <!-- <img :src="`${publicPath}img/mine.png`" class="auto-img" /> -->
        </span>我的
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    // 引入静态文件中的图片要通过publicPath变量的数据参数
    publicPath: process.env.BASE_URL
  })
};
</script>

<style lang="scss">
@import "./assets/scss/index.scss";
@import "./assets/scss/mixin.scss";
#app,
html,
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b2b2b2;
  position: relative;
  height: 100%;

  .footer-barner {
    position: fixed;
    display: flex;
    width: calc(100% - 0.2rem);
    height: 1rem;
    padding: 0.1rem;
    left: 0;
    bottom: 0;
    z-index: 10;
    background-color: #f9f9f9;
    border-top: 1px solid #e1e1e1;
  }

  .barner-item {
    flex: 1;
    align-self: flex-end;
    font-size: 0.14rem;
    .index-icon {
      width: 1.1rem;
      height: 0.76rem;
      display: block;
      margin: 0 auto;
    }

    .index-icon {
      width: 1.1rem;
      height: 1.1rem;
      display: block;
      margin: 0 auto;
      background: url("/img/publish_add.png") no-repeat center;
      background-size: 1.1rem 1.1rem;
    }

    .index {
      width: 1.1rem;
      height: 0.8rem;
      display: block;
      margin: 0 auto;
    }

    .index-icon2 {
      @include isActive-img("/img/index.png");
    }

    .index-icon3 {
      @include isActive-img("/img/follow.png");
    }

    .index-icon4 {
      @include isActive-img("/img/category.png");
      background-size: 1.2rem 0.8rem;
    }

    .index-icon5 {
      @include isActive-img("/img/mine.png");
      background-size: 1.2rem 0.8rem;
    }

    &.active {
      color: #000;
      .index-icon2 {
        @include isActive-img("/img/index_selected.png");
      }
      .index-icon3 {
        @include isActive-img("/img/follow_selected.png");
      }

      .index-icon4 {
        @include isActive-img("/img/category_selected.png");
        background-size: 1.2rem 0.8rem;
      }

      .index-icon5 {
        @include isActive-img("/img/mine_selected.png");
        background-size: 1.2rem 0.8rem;
      }
    }
  }
}
</style>
