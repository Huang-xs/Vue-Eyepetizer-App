<template>
  <div class="bottomIcon">
    <div class="line"></div>
    <div class="bottom-img">
      <img :src="`${publicPath}img/icon_logo.png`" class="auto-img" alt />
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
export default {
  data: () => ({
    publicPath: process.env.BASE_URL
  })
};
</script>

<style lang="scss" scoped>
.bottomIcon {
  display: flex;
  padding: .5rem 3.6rem;
  .line {
      flex: 1;
      width: 5px;
    position: relative;
    top: -6px;
    border-bottom: 1px solid rgb(0, 0, 0);
  }
  .bottom-img{
      width: 1.76rem;
      height: .6rem;
      padding:0 .1rem;
  }
}
</style>