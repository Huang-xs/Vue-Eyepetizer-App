<template>
  <transition name="scroll">
    <div class="history" >
      <div class="history-title">
        <span class="history-icon" @click="goback">
          <img :src="`${publicPath}img/player_close.png`" class="auto-img" />
        </span>历史记录
      </div>
      <ul class="list">
        <li
          class="item"
          v-for="(value,index) in historyData"
          :key="index"
          @click="historyDetail(value)"
        >{{value.data.title}}</li>
      </ul>
    </div>
  </transition>
</template>
<script>
export default {
  props: ["showHistory"],
  data() {
    return {
      publicPath: process.env.BASE_URL,
      historyData: []
    };
  },
  methods: {
    historyDetail(val) {
      this.$router.push({ name: "radioDetail", params: { val } });
    },
    goback() {
      this.$emit("back");
    }
  },
  mounted() {
    let num = JSON.parse(localStorage.getItem("history"));
    if (num == null) {
      return;
    } else {
      this.historyData = num;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
.history {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  background-color: #fff;
  z-index: 100;
  .history-title {
    width: 100%;
    height: 1rem;
    background-color: #ddd;
    overflow: hidden;
    font-size: 16px;
    color: #000;
    line-height: 1rem;
    .history-icon {
      float: left;
      width: 0.7rem;
      height: 0.7rem;
      margin-top: calc(0.3rem / 2);
      margin-left: 0.2rem;
      background-color: rgba(32, 32, 32, 0.5);
      border-radius: 50%;
    }
  }
  .list {
    padding: 0.4rem;
    text-align: left;
    .item {
      padding: 0.3rem 0;
      @include scale-border-bottom(#ddd);
    }
  }
}
.scroll-enter {
  transform: translateY(-100%);
}
.scroll-enter-active,
.scroll-leave-active {
  transition: all 0.6s linear;
}
.scroll-leave-to {
  transform: translateY(100%);
}
</style>