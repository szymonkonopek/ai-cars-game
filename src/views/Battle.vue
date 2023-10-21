<template>
  <div>
    <h1>Battle</h1>
    <BattleCarInfo :car="this.myCar"></BattleCarInfo>
    <BattleCarInfo :car="this.otherCar"></BattleCarInfo>
  </div>
</template>

<script>
import BattleCarInfo from "@/components/BattleCarInfo.vue";
import { mapState } from "vuex";
import { actionTypes } from "@/store/modules/firebaseDatabase";
export default {
  name: "AppBattle",
  components: {
    BattleCarInfo,
  },
  computed: {
    ...mapState({
      mySelectedCar: (state) => state.firebaseDatabase.mySelectedCar,
      otherSelectedCar: (state) => state.firebaseDatabase.otherSelectedCar,
    }),
  },
  data() {
    return {
      myCar: undefined,
      otherCar: undefined,
    };
  },
  mounted() {
    this.$store
      .dispatch(actionTypes.getCarById, {
        id: this.mySelectedCar,
      })
      .then((result) => {
        console.log("car", result[0]);
      });
  },
};
</script>
