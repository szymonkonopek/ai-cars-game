<template>
  <div>
    <div>car feed</div>
    <div>=====</div>
    <button @click="getCars">get cars</button>
    <div v-for="(car, index) in cars" :key="index">
      <car-feed-item :carData="car" />
    </div>
  </div>
</template>

<script>
import { actionTypes as firebaseActionTypes } from "@/store/modules/firebaseDatabase";
import { mapState } from "vuex";
import CarFeedItem from "./CarFeedItem";

export default {
  name: "carFeed",
  props: {
    cars: {
      typeof: Array,
      required: true,
    },
  },
  components: {
    CarFeedItem,
  },
  computed: {
    ...mapState({
      // cars: (state) => state.firebaseDatabase.downloadedCars,
    }),
  },
  methods: {
    getCars() {
      console.log("get cars");
      this.$store.dispatch(firebaseActionTypes.getCars);
    },
  },
};
</script>
