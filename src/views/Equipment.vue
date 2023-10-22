<template>
  <div class="w-75 mx-auto mt-5"><my-car-feed></my-car-feed></div>
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
