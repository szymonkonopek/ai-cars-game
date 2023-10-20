<template>
  <div>
    <div>My feed</div>
    <div>=====</div>
    <div v-for="(car, index) in cars" :key="index">
      <car-feed-item :carData="car" />
    </div>
  </div>
</template>

<script>
import { actionTypes as firebaseActionTypes } from "@/store/modules/firebaseDatabase";
import { actionTypes as authActionTypes } from "@/store/modules/auth";

import { mapState } from "vuex";
import CarFeedItem from "./CarFeedItem";

export default {
  name: "MyFeed",
  components: {
    CarFeedItem,
  },

  computed: {
    ...mapState({
      cars: (state) => state.firebaseDatabase.myCars,
      uid: (state) => state.auth.uid,
    }),
  },
  mounted() {
    this.$store.dispatch(authActionTypes.GetMyUid).then(() => {
      this.$store.dispatch(firebaseActionTypes.getMyCars, { uid: this.uid });
    });
  },
};
</script>
