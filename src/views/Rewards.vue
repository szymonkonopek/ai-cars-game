<template>
  <div style="margin-top: 7rem">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div :class="{ 'd-none': this.car || this.isLoading }">
        <i
          class="d-flex bi bi-trophy text-warning justify-content-center mt-5"
          style="font-size: 175px"
        ></i>
      </div>
      <div class="card" :class="{ 'd-none': !this.car }">
        <div class="card-body text-left">
          <h5 class="card-title">{{ car.brand }}</h5>
          <h6 class="card-subtitle text-muted">{{ car.model }}</h6>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Horsepower: {{ car.horsepower }}</li>
            <li class="list-group-item">
              Production date: {{ car.production_year }}
            </li>
            <li class="list-group-item">$Price: {{ car.price_in_usd }}</li>
            <li class="list-group-item">Type: {{ car.type }}</li>
            <li class="list-group-item">Weight: {{ car.weight }}</li>
          </ul>
        </div>
      </div>
      <div
        :class="{ 'd-none': !this.isLoading }"
        class="spinner-grow text-warning"
        style="width: 175px; height: 175px"
        role="status"
      >
        <span class="sr-only"></span>
      </div>
      <button
        class="btn btn-warning btn-lg mt-4 shadow"
        :disabled="
          this.isLoading || this.car != false || this.user.available_cars < 1
        "
        @click="handleGetCar"
      >
        Get a new car!
      </button>
      <div class="text-muted">
        {{ this.user.available_cars }} cars available
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { actionTypes as gptActionTypes } from "@/store/modules/gptCars";
import { actionTypes as firebaseActionTypes } from "@/store/modules/firebaseDatabase";
import { actionTypes as authActionTypes } from "@/store/modules/auth";

export default {
  name: "RewardsVIew",
  data() {
    return {
      car: false,
      user: "",
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.gptCars.isLoading,
    }),
  },
  methods: {
    handleGetCar() {
      this.$store
        .dispatch(gptActionTypes.getCar)
        .then((response) => {
          this.car = response;
        })
        .then(() => {
          this.$store.dispatch(firebaseActionTypes.saveCar, {
            data: this.car,
          });
        })
        .then(() => {
          this.user.available_cars -= 1;
          this.$store.dispatch(firebaseActionTypes.updateRecord, {
            collectionName: "users",
            recordName: this.user.user_id,
            keyItem: {
              available_cars: this.user.available_cars - 1,
            },
          });
        });
    },
  },
  mounted() {
    this.$store.dispatch(authActionTypes.GetMyUid).then((response) => {
      this.$store
        .dispatch(firebaseActionTypes.getUserById, { id: response })
        .then((response) => {
          this.user = response;
          console.log(this.user);
        });
    });
  },
};
</script>
