<template>
  <div class="hotClassly">
    <div class="hotClassly-title">{{titleType}}</div>
    <div class="more-classly">
      全部分类
      <span class="more-icon">
        <img :src="`${publicPath}img/arrow_right.png`" class="auto-img" />
      </span>
    </div>
  </div>
</template>
<script>
export default {
    props:["titleType"],
    data(){
        return{
            publicPath: process.env.BASE_URL
        }
    }
};
</script>

<style lang="scss" scoped>
.hotClassly {
  display: flex;
  padding: .2rem 0;
  & > div {
    flex: 1;
  }
  .hotClassly-title {
    color: #000;
    font-size: 20px;
    text-align: left;
    line-height: 29px;
    font-weight: 700;
  }
  .more-classly {
    text-align: right;
    padding-left: 0.2rem;
    font-size: 14px;
    line-height: 29px;
    color: #3c79d0;
    .more-icon {
      float: right;
      width: 0.8rem;
      height: 0.8rem;
      vertical-align: middle;
    }
  }
}
</style>