<template>
  <div class="mb-5">
    <h2>My cars</h2>
    <div
      class="d-flex mx-auto"
      :class="{ 'flex-column overflow-auto': isCol, 'flex-wrap': !isCol }"
      :style="{ 'max-height': isCol ? '60vh' : none }"
    >
      <div v-for="(car, index) in cars" :key="index">
        <my-car-feed-item
          :carData="car.data()"
          :id="car.id"
          :isInfoVisible="this.isInfoVisible"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { actionTypes as firebaseActionTypes } from "@/store/modules/firebaseDatabase";
import { actionTypes as authActionTypes } from "@/store/modules/auth";

import { mapState } from "vuex";
import MyCarFeedItem from "@/components/MyCarFeedItem";

export default {
  name: "MyFeed",
  components: {
    MyCarFeedItem,
  },
  computed: {
    ...mapState({
      cars: (state) => state.firebaseDatabase.myCars,
      uid: (state) => state.auth.uid,
    }),
  },
  props: {
    isCol: {
      typeof: Boolean,
      required: false,
    },
    isInfoVisible: {
      typeof: Boolean,
      required: false,
    },
  },
  mounted() {
    this.$store.dispatch(authActionTypes.GetMyUid).then(() => {
      this.$store.dispatch(firebaseActionTypes.getMyCars, { uid: this.uid });
    });
  },
};
</script>
