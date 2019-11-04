<template>
  <div class="daily">
    <ChoiceNess :recomitem="daily" :current="currentIndex"></ChoiceNess>
  </div>
</template>

<script>
import ChoiceNess from "../../components/ChoiceNess.vue";

export default {
  props: ["daily","currentIndex"],
  components: {
    ChoiceNess
  }
};
</script>

<style lang="scss" scoped>
.daily {
  padding: 0.4rem;
  height: calc(100% - 1.8rem);
  overflow: auto;
}
</style>