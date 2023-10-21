<template>
  <div>
    <div
      class="gap-3 flex-wrap mx-auto mb-3"
      :class="{
        'd-none': !selectedUser,
        'd-flex': selectedUser,
        'flex-column': isCol,
      }"
    >
      <h2>{{ selectedUser.username }}'s cars</h2>

      <div v-for="(car, index) in cars" :key="index">
        <CarFeedItem :carData="car.data()" :id="car.id" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CarFeedItem from "./CarFeedItem";

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
  },
  components: {
    CarFeedItem,
  },
  computed: {
    ...mapState({
      selectedUser: (state) => state.firebaseDatabase.selectedUser,
    }),
  },
};
</script>
