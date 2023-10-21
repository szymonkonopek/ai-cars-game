<template>
  <div class="fixed-bottom d-flex justify-content-center">
    <button
      :class="{ 'd-none': !this.otherSelectedCar || !this.mySelectedCar }"
      @click="handleClick"
    >
      Challange this car
    </button>
  </div>
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
