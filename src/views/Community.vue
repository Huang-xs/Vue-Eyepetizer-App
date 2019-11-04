<template>
    <div>
        <HeaderBanner :index="community" :currentIndex="currentIndex" ></HeaderBanner>
        <!-- <router-view></router-view> -->
        <Attention></Attention>
        <!-- <h2>底部社区</h2> -->
    </div>
</template>

<script>
import HeaderBanner from "../components/HeaderBanner.vue";
import Attention from "../views/header/Attention.vue"

export default {
    data(){
        return{
            // "推荐",
            community:["关注"],
            currentIndex:0,

        }
    },
    components:{
        HeaderBanner,
        Attention
    },
    methods:{
        changeTag(data) {
      this.currentIndex = data;
      if (data == 0) {
        this.$router.push({ name: "communityrecom" });
      } else if (data == 1) {
        this.$router.push({ name: "attention" });
      } 
    }
    }
    
}
</script>

<style lang="scss" scoped>

</style>