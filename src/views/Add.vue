<template>
  <div class="container">
    <div class="contain-header">
      <div class="item back">
        <div class="img" @click="_goback">
          <img :src="`${publicPath}img/ic_action_back.png`" class="auto-img" />
        </div>
      </div>
      <span class="item title">发布</span>
      <span class="item upload">上传</span>
    </div>
    <div class="addition-content">
      <div class="addition">
        <div class="addition-icon">
          <img :src="`${publicPath}img/media_add.png`" class="auto-img" />
        </div>
      </div>
    </div>

    <div class="description">
      <textarea class="description-box">描述 : 填写描述和主题，可以让更多人看到你的作品0/1000</textarea>
    </div>
    <div class="selected">
      <div class="description-topic">
        主题
        <span class="seletced-tip">点击选择投稿主题</span>
      </div>
      <div class="topic">
        <span class="topic-item">#城市</span>
        <span class="topic-item">#假日旅行计划</span>
        <span class="topic-item">#开眼装Bi大赛</span>
      </div>
    </div>
    <div class="location">
      位置
      <span class="seletced-location">点击添加作品位置</span>
    </div>

    <div class="location">
      原创保护
      <span class="protect">保存或下载时自动增加水印</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  methods:{
    _goback(){
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
.contain-header {
  display: flex;
  padding: 0.3rem;
  @include scale-border-bottom(#ddd);
  .back {
    display: inline-block;
    overflow: hidden;
    .img {
      float: left;
      width: 0.9rem;
      height: 0.9rem;
    }
  }
  .title {
    font-weight: 700;
    color: #000;
  }
  .item {
    flex: 0 0 33%;
    font-size: 19px;
    line-height: 0.9rem;
  }
  .upload {
    text-align: right;
  }
}
.addition-content {
  @include scale-border-bottom(#ddd);
  padding: 0.2rem;
  .addition {
    position: relative;
    width: 3.5rem;
    height: 3.5rem;
    background-color: #efefef;
    border-radius: 5px;
    .addition-icon {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 1rem;
      height: 1rem;
      margin: auto;
    }
  }
}
.description {
  padding: 0.2rem;
  @include scale-border-bottom(#ddd);
  .description-box {
    text-align: left;
    width: 95%;
    height: 3rem;
    border: 0;
    outline: 0;
  }
}
.selected {
  padding: 0.5rem 0.4rem;
  @include scale-border-bottom(#ddd);
  .description-topic {
    color: #000;
    text-align: left;
    margin-bottom: 0.5rem;
    .seletced-tip {
      margin-left: 0.3rem;
      color: #4778d1;
    }
  }
  .topic-item {
    background-color: #ddd;
    color: #000;
    padding: 0.1rem;
    border-radius: 3px;
    margin-left: 0.2rem;
  }
}
.location {
  padding: 0.4rem;
  text-align: left;
  color: #000;
  @include scale-border-bottom(#ddd);
  .seletced-location {
    margin-left: 0.3rem;
    color: #4778d1;
  }
  .protect {
    margin-left: 0.3rem;
    color: rgb(104, 96, 96);
  }
}
</style>