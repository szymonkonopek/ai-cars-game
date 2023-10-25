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
    <div
      class="card-body text-left position-relative overflow-auto"
      style="height: 225px"
    >
      <button
        class="position-absolute top-0 end-0 btn"
        data-bs-toggle="modal"
        :data-bs-target="'#id' + this.id"
        v-if="this.isInfoVisible"
      >
        <i class="bi bi-info-circle float-right"></i>
      </button>
      <a
        class="position-absolute top-0 start-0 btn"
        :href="
          'https://www.google.com/search?tbm=isch&q=' +
          this.carData.data.brand +
          ' ' +
          this.carData.data.model +
          ' ' +
          this.carData.data.production_year
        "
        target="_blank"
      >
        <i class="bi bi-images"></i>
      </a>
      <h5 class="card-title">{{ carData.data.brand }}</h5>
      <h6 class="card-subtitle text-muted">{{ carData.data.model }}</h6>
      <p class="card-text">{{ carData.data.description }}</p>
    </div>
  </button>
  <div class="modal fade" :id="'id' + this.id" tabindex="-1" aria-hidden="true">
    <CarInfoModel :carData="this.carData" :id="this.id" />
  </div>
</template>

<script>
import { actionTypes } from "@/store/modules/firebaseDatabase";
import { mapState } from "vuex";
import CarInfoModel from "@/components/CarInfoModal.vue";

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
    isInfoVisible: {
      typeof: Boolean,
      required: false,
    },
  },
  components: {
    CarInfoModel,
  },
  computed: {
    ...mapState({
      selectedCar: (state) => state.firebaseDatabase.mySelectedCar,
    }),
  },
  methods: {
    handleClick() {
      this.$store.dispatch(actionTypes.selectMyCar, { id: this.id });
    },
  },
  mounted() {
    this.$store.dispatch(actionTypes.selectMyCar, { id: "" });
  },
};
</script>
