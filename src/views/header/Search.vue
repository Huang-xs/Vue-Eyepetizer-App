<template>
  <transition >
    <div >
      <div class="search">
        <div class="search-box">
          <input class="input" type="text" placeholder="搜索视频、作者、用户及标签" />
          <i class="search-icon">
            <img :src="`${publicPath}img/ic_search.png`" class="auto-img" />
          </i>
          <button class="item cancelBtn" @click="searchBack">取消</button>
        </div>
        <h2 class="title">热搜关键词</h2>
        <div v-for="(val,i) in searchData" :key="i" class="search-text">{{val}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      searchData: [
        "蓝",
        "装Bi大赛",
        "秋天",
        "今日书摘",
        "摄影日常",
        "创意广告",
        "中国风",
        "美食",
        "旅行",
        "健身",
        "汽车",
        "黑科技"
      ]
    };
  },
  methods: {
    searchBack() {
      this.$router.go(-1);
    },
  }
};
</script>
<style lang="scss" scoped>
.search {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 0.4rem;
  background-color: #fff;
  z-index: 500;
  .search-box {
    display: flex;
    margin-bottom: 0.3rem;
    .input {
      position: relative;
      flex: 70%;
      border-radius: 2px;
      background-color: #f0f0f0;
      border: 0;
      outline: 0;
      padding: 0.25rem 0.25rem 0.25rem 0.9rem;
    }
    .search-icon {
      position: absolute;
      left: 0.7rem;
      top: 0.6rem;
      width: 0.5rem;
      height: 0.5rem;
    }
    .item {
      flex: 0 0 1;
      border: 0;
      outline: 0;
      background-color: transparent;
      font-size: 16px;
    }
  }
  .title {
    font-size: 19px;
    color: #000;
    text-align: left;
    font-weight: 700;
  }
  .search-text {
    margin: 0.5rem 0;
    color: #6d87b1;
    font-size: 16px;
    font-weight: 700;
    text-align: left;
  }
}
</style>