<template>
  <div style="margin-top: 7rem">
    <h1 class="m-5">Battle</h1>
    <div class="d-flex justify-content-around flex-wrap">
      <BattleCarInfo
        :carId="this.mySelectedCar"
        :title="'My car'"
      ></BattleCarInfo>
      <BattleCarInfo
        :carId="this.otherSelectedCar"
        :title="'Enemy car'"
      ></BattleCarInfo>
    </div>
    <div class="d-flex justify-content-center m-5" v-if="this.explanation">
      <div class="card w-75">
        <div class="card-body text-center">
          {{ this.explanation.explanation }}
        </div>
      </div>
    </div>
    <button
      @click="handleStartBattle"
      class="d-flex fixed-bottom justify-content-center btn btn-primary rounded-0"
      v-if="!this.explanation"
      :disabled="isLoading"
    >
      Start race
    </button>

    <router-link
      class="d-flex fixed-bottom justify-content-center btn btn-primary rounded-0"
      v-if="this.explanation"
      :to="'/feed'"
      >See other races</router-link
    >
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
      isLoading: (state) => state.gptCars.isLoading,
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
                  this.$store.dispatch(firebaseActionTypes.saveBattleResult, {
                    car1: this.car1,
                    car2: this.car2,
                    result: response,
                  });
                  this.explanation = response;
                });
            })
        );
    },
  },
};
</script>
