<template>
  <div style="margin-top: 7rem">
    <div style="height: 1000px"></div>
  </div>
</template>

<script>
// import { actionTypes as firebaseActionTypes } from "@/store/modules/firebaseDatabase";
// import { actionTypes as gptActionTypes } from "@/store/modules/gptCars";
import { mapState } from "vuex";
import "@/../public/paralax.css";

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
  data() {
    return {
      hero: require("@/assets/hero.png"),
    };
  },
  methods: {},
};
</script>
