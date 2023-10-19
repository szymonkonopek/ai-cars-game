<template>
  <div>Feed</div>
  <button @click="handleClick">Get data</button>
</template>

<script>
import AIapi from "@/api/axios";
export default {
  name: "AppFeedView",
  methods: {
    handleClick() {
      AIapi.getData();
    },
  },
};
</script>
