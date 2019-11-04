<template>
  <div>
    <HeaderBanner :index="inform" :currentIndex="currentIndex" @change="changeTag"></HeaderBanner>
    <!-- <h2>底部通知</h2> -->
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBanner from "../components/HeaderBanner.vue";

export default {
  data() {
    return {
      inform: ["推送", "互动", "私信"],
      currentIndex: 0
    };
  },
  components: {
    HeaderBanner
  },
  methods:{
      changeTag(data) {
      this.currentIndex = data;
      if (data == 0) {
        this.$router.push({ name: "push" });
      } else if (data == 1) {
        this.$router.push({ name: "interaction" });
      }else if (data == 2) {
         this.$router.push({ name: "privateletter" });
       }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>