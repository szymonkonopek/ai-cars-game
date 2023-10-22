<template>
  <div class="card">
    <h1>Battle info</h1>
    {{ car.brand }}
  </div>
</template>

<script>
import { actionTypes } from "@/store/modules/firebaseDatabase";

export default {
  name: "AppBattle",
  props: {
    carId: {
      typeof: Object,
      required: true,
    },
  },
  data() {
    return {
      car: "",
    };
  },
  mounted() {
    if (!this.carId) {
      this.$router.push({ name: "findOpponent" });
    } else {
      this.$store
        .dispatch(actionTypes.getCarById, {
          id: this.carId,
        })
        .then((result) => {
          this.car = result.data;
        });
    }
  },
};
</script>
