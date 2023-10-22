<template>
  <button
    @click="handleClick"
    class="fixed-bottom justify-content-center btn btn-primary rounded-0"
    :class="{
      'd-none': !this.otherSelectedCar || !this.mySelectedCar,
      'd-flex': this.otherSelectedCar && this.mySelectedCar,
    }"
  >
    Challange this car
  </button>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BattleButton",
  computed: {
    ...mapState({
      otherSelectedCar: (state) => state.firebaseDatabase.otherSelectedCar,
      mySelectedCar: (state) => state.firebaseDatabase.mySelectedCar,
    }),
  },
  methods: {
    handleClick() {
      this.$router.push({ name: "battle" });
    },
  },
};
</script>
