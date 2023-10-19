<template>
  <div>Feed</div>
  <button @click="handleGetCar">Get data</button>
  <button @click="handleSave">Save car</button>
</template>

<script>
import { actionTypes } from "@/store/modules/gptCars";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/main.js";
import { mapState } from "vuex";

export default {
  name: "AppFeedView",
  computed: {
    ...mapState({
      data: (state) => state.gptCars.data,
    }),
  },
  methods: {
    handleGetCar() {
      this.$store.dispatch(actionTypes.getCar);
    },
    handleSave() {
      console.log("data", this.data);
      addDoc(collection(db, "cars"), {
        data: this.data,
        user_id: "szymon",
      });
    },
  },
};
</script>
