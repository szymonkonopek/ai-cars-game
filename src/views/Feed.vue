<template>
  <div>Feed (other cars)</div>
  <button @click="handleGetCar">Get data</button>
  <button @click="handleSave">Save car</button>
  My cars
</template>

<script>
import { actionTypes as firebaseActionTypes } from "@/store/modules/firebaseDatabase";
import { actionTypes as gptActionTypes } from "@/store/modules/gptCars";
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
  methods: {
    handleGetCar() {
      this.$store.dispatch(gptActionTypes.getCar);
    },
    handleSave() {
      this.$store.dispatch(firebaseActionTypes.saveCar, { data: this.data });
    },
  },
};
</script>
