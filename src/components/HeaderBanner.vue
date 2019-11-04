<template>
  <div class="header-banner">
    <div class="banner">
      <div
        class="banner-item"
        v-for="(val,index) in index"
        :key="index"
        :class="{active:index==currentIndex}"
        @click="cutIndex(index)"
      >{{val}}</div>
    </div>
    <div class="header-search" @click="search"></div>
  </div>
</template>

<script>
export default {
  props: ["index", "currentIndex"],
  methods: {
    cutIndex(index) {
      this.$emit("change", index);
    },
    search() {
      console.log("444");
      this.$router.push({ name: "search" });
    }
  }
};
</script>

<style lang="scss" scoped>
.header-banner {
  position: relative;
  width: 100%;
  height: 1rem;
  background-color: #fafafa;
  color: #707070;
  .banner {
    display: flex;
    height: 1rem;
    width: 60%;
    margin: 0 auto;
  }
  .banner-item {
    position: relative;
    flex: 1;
    align-self: center;
    &.active {
      color: #000;
      font-weight: 600;
      &:after {
        position: absolute;
        content: " ";
        border: 1px solid #000;
        width: 0.25rem;
        bottom: -0.2rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        background-color: #000;
        color: #000;
      }
    }
  }
  .header-search {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0.2rem;
    width: 0.7rem;
    height: 1rem;
    background: url("/img/search.png") no-repeat center;
    background-size: 0.99rem 0.99rem;
  }
}
</style>