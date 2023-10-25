<template>
  <div>
    <h1>{{ this.title }}</h1>

    <button class="card m-2" style="width: 18rem">
      <!-- <img
      class="card-img-top"
      :src="carData.data.logoImg"
      alt="Card image cap"
    /> -->
      <div
        class="card-body text-left position-relative overflow-auto"
        style="height: 225px"
      >
        <a
          class="position-absolute top-0 start-0 btn"
          :href="
            'https://www.google.com/search?tbm=isch&q=' +
            this.car.brand +
            ' ' +
            this.car.model +
            ' ' +
            this.car.production_year
          "
          target="_blank"
        >
          <i class="bi bi-images"></i>
        </a>
        <h5 class="card-title">{{ car.brand }}</h5>
        <h6 class="card-subtitle text-muted">{{ car.model }}</h6>
        <p class="card-text">{{ car.description }}</p>
      </div>
    </button>
    <div
      class="modal fade"
      :id="'id' + this.id"
      tabindex="-1"
      aria-hidden="true"
    ></div>
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
  components: {},
};
</script>
