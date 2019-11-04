<template>
  <div class="inform-content">
    <ul class="inform-list">
      <li class="inform" v-for="(v,i) in informData.messageList" :key="i">
        <div class="item inform-img">
          <div class="img">
            <img :src="v.icon" class="auto-img" />
          </div>
        </div>
        <div class="item inform-text">
          <div class="title">{{v.title}}</div>
          <div class="day">
            {{i+1}}天前
            <div class="arrow-icon">
              <img :src="`${publicPath}img/arrow_right.png`" class="auto-img" />
            </div>
          </div>
          <div class="decrition">{{v.content}}</div>
        </div>
      </li>
    </ul>
    <!-- {{informData}} -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      informData: {}
    };
  },
  mounted() {
    this.$http("/api/v3/messages?vc=552&deviceModel=BLN-AL20").then(res => {
      console.log(res);
      let { data } = res;
      this.informData = data;
    });
  }
};
</script>

<style lang="scss" scoped>
.inform-list {
  height: calc(100% - 2.4rem);
  overflow: auto;
  margin-bottom: 1.2rem;
}
.inform {
  display: flex;

  .inform-img {
    flex: 0 0 20%;
    .img {
      width: 1rem;
      height: 1rem;
      margin: .3rem auto;
      border: 1px solid #ddd;
      border-radius: 50%;
    overflow: hidden;
    }
  }
  .inform-text {
    flex: 0 0 80%;
    text-align: left;
    padding: 0.2rem 0;
    border-bottom: 1px solid #ddd;
    .title {
      width: 200px;
      font-size: 17px;
      color: #000;
      margin-bottom: 0.1rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

    }
    .day {
      color: #b2b2b2;
      height: 1rem;
      line-height: 1rem;
    }
    .arrow-icon {
      width: 1rem;
      height: 1rem;
      float: right;
    }
    .decrition {
      width: 90%;
    }
  }
}
</style>