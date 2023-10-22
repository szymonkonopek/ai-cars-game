<template>
  <div>
    <h1>Battle</h1>
    <BattleCarInfo :carId="this.mySelectedCar"></BattleCarInfo>
    <BattleCarInfo :carId="this.otherSelectedCar"></BattleCarInfo>
    <button @click="handleStartBattle">Start</button>
    {{ this.explanation }}
  </div>
</template>

<script>
import { actionTypes as gptActionTypes } from "@/store/modules/gptCars";
import { actionTypes as firebaseActionTypes } from "@/store/modules/firebaseDatabase";

import BattleCarInfo from "@/components/BattleCarInfo.vue";
import { mapState } from "vuex";
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
      car1: "",
      car2: "",
      explanation: "",
    };
  },
  methods: {
    handleStartBattle() {
      this.$store
        .dispatch(firebaseActionTypes.getCarById, { id: this.mySelectedCar })
        .then((myCar) => {
          this.car1 = myCar;
        })
        .then(
          this.$store
            .dispatch(firebaseActionTypes.getCarById, {
              id: this.otherSelectedCar,
            })
            .then((otherCar) => {
              this.car2 = otherCar;
            })
            .then(() => {
              this.$store
                .dispatch(gptActionTypes.getVersusCarsResults, {
                  car1: this.car1,
                  car2: this.car2,
                })
                .then((response) => {
                  console.log(response);
                  this.explanation = response;
                });
            })
        );
    },
  },
};
</script>
