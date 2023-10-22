<template>
  <div class="card m-2">
    <div class="card-body text-left">
      <h1>{{ this.title }}</h1>
      {{ car.brand }}
    </div>
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
    title: {
      typeof: String,
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
