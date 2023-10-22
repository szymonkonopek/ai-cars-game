<template>
  <div>Feed</div>
</template>

<script>
// import { actionTypes as firebaseActionTypes } from "@/store/modules/firebaseDatabase";
// import { actionTypes as gptActionTypes } from "@/store/modules/gptCars";
import { mapState } from "vuex";

export default {
  name: "AppFeedView",
  components: {},
  computed: {
    ...mapState({
      data: (state) => state.gptCars.data,
      uid: (state) => state.auth.uid,
      otherCars: (state) => state.firebaseDatabase.otherCars,
    }),
  },
  methods: {},
};
</script>
