<template>
  <button
    @click="handleClick"
    class="card m-2"
    :class="{ 'border-primary': id == selectedCar }"
    style="width: 18rem"
  >
    <!-- <img
      class="card-img-top"
      :src="carData.data.logoImg"
      alt="Card image cap"
    /> -->
    <div class="card-body text-left">
      <h5 class="card-title">{{ carData.data.brand }}</h5>
      <h6 class="card-subtitle text-muted">{{ carData.data.model }}</h6>
      <p class="card-text">
        {{ carData.data.description }}
      </p>
    </div>
  </button>
</template>
<script>
import { actionTypes } from "@/store/modules/firebaseDatabase";
import { mapState } from "vuex";

export default {
  name: "MyCarFeedItem",
  props: {
    carData: {
      typeof: Object,
      required: true,
    },
    id: {
      typeof: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      selectedCar: (state) => state.firebaseDatabase.otherSelectedCar,
    }),
  },
  methods: {
    handleClick() {
      this.$store.dispatch(actionTypes.selectOtherCar, { id: this.id });
    },
  },
};
</script>
