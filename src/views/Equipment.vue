<template>
  <div class="w-75 mx-auto" style="margin-top: 7rem">
    <my-car-feed :isInfoVisible="true"></my-car-feed>
  </div>
</template>

<script>
import MyCarFeed from "@/components/MyCarFeed";
import { mapState } from "vuex";

export default {
  name: "AppEquipment",
  computed: {
    ...mapState({}),
  },
  components: {
    MyCarFeed,
  },
};
</script>
