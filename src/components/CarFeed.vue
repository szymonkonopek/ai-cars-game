<template>
  <div>
    <div>Car feed</div>
    <div v-for="(car, index) in cars" :key="index">
      <car-feed-item :carData="car" />
    </div>
  </div>
</template>

<script>
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
};
</script>
