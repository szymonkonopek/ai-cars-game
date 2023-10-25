<template>
  <div
    class="d-flex flex-column align-items-center"
    style="width: 304px"
    v-if="selectedUser"
  >
    <div class="d-flex">
      <button
        @click="handleBackClick"
        class="btn btn-light shadow-none mr-3 mb-2"
      >
        <i class="bi bi-backspace fa-lg" style="font-size: 24px"></i>
      </button>
      <h2>{{ selectedUser.username }}'s cars</h2>
      <div class="d-flex align-items-center"></div>
    </div>
    <div
      class="mx-auto mb-3 flex-column overflow-auto"
      style="max-height: 60vh"
      :class="{
        'd-none': !selectedUser,
        'd-flex': selectedUser,
        'flex-column': isCol,
      }"
    >
      <div v-for="(car, index) in cars" :key="index">
        <CarFeedItem :carData="car.data()" :id="car.id" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CarFeedItem from "./CarFeedItem";
import { mutationType } from "@/store/modules/firebaseDatabase";

export default {
  name: "carFeed",
  props: {
    cars: {
      typeof: Array,
      required: true,
    },
    isCol: {
      typeof: Boolean,
      required: false,
    },
    user: {
      typeof: Object,
      required: false,
    },
  },
  components: {
    CarFeedItem,
  },
  computed: {
    ...mapState({
      selectedUser: (state) => state.firebaseDatabase.selectedUser,
    }),
  },
  methods: {
    handleBackClick() {
      this.$store.commit(mutationType.setSelectedUser, "");
      this.$store.commit(mutationType.getNotMyCarsSuccess);
      this.$store.commit(mutationType.selectOtherCarIdSuccess, "");
    },
  },
};
</script>
