<template>
  <div>Feed</div>
  <button @click="handleGetCar">Get data</button>
  <button @click="handleSave">Save car</button>
  My cars
  <car-feed :cars="cars"></car-feed>
</template>

<script>
import { actionTypes as authActionTypes } from "@/store/modules/gptCars";
import { actionTypes as firebaseActionTypes } from "@/store/modules/firebaseDatabase";
import { mapState } from "vuex";
import CarFeed from "@/components/CarFeed";

export default {
  name: "AppFeedView",
  components: {
    CarFeed,
  },
  computed: {
    ...mapState({
      data: (state) => state.gptCars.data,
      uid: (state) => state.auth.uid,
      cars: (state) => state.firebaseDatabase.downloadedCars,
    }),
  },
  methods: {
    handleGetCar() {
      this.$store.dispatch(authActionTypes.getCar);
    },
    handleSave() {
      this.$store.dispatch(firebaseActionTypes.saveCar, { data: this.data });
    },
  },
  mounted() {
    this.$store.dispatch(firebaseActionTypes.getCars);
  },
};
</script>
