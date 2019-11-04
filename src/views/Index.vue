
<template>
  <div class="main">
    <HeaderBanner :index="index" :currentIndex="currentIndex" @change="changeTag"></HeaderBanner>
    <router-view :recom="itemListData" :daily="itemListData" :currentIndex="currentIndex"></router-view>
  </div>
</template>
<script>
import HeaderBanner from "../components/HeaderBanner.vue";

export default {
  data: () => ({
    index: ["发现", "推荐", "日报"],
    currentIndex: 1,
    publicPath: process.env.BASE_URL,
    itemListData: Object
  }),
  mounted() {
    let name = this.$route.name;
    switch (name) {
      case "discover":
        this.currentIndex = 0;
        break;
      case "recommend":
        this.currentIndex = 1;
        break;
      case "dailyPaper":
        this.currentIndex = 2;
        break;
    }

    this.$http("/api/v4/tabs/selected").then(res => {
      let { data } = res;
      this.itemListData = data.itemList;
    });
  },
  methods: {
    changeTag(data) {
      this.currentIndex = data;
      if (data == 0) {
        this.$router.push({ name: "discover" });
      } else if (data == 1) {
        this.$router.push({ name: "recommend" });
      } else {
        this.$router.push({ name: "dailyPaper" });
      }
    }
  },
  components: {
    HeaderBanner
  }
};
</script>

<style lang="scss" scoped>
.main {
  height: calc(100% - 1.2rem);
}
</style>