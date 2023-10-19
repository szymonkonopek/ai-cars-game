<template>
  <div>Feed</div>
  <button @click="handleClick">Get data</button>
</template>

<script>
import { actionTypes } from "@/store/modules/gptCars";
export default {
  name: "AppFeedView",
  methods: {
    handleClick() {
      this.$store.dispatch(actionTypes.getCar);
    },
  },
};
</script>
