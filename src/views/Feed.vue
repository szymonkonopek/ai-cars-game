<template>
  <div style="margin-top: 7rem">
    <div v-for="(battle, index) in this.battles" :key="index">
      <FeedCarListItem :battle="battle" />
    </div>

    <div style="height: 1000px"></div>
  </div>
</template>

<script>
// import { actionTypes as firebaseActionTypes } from "@/store/modules/firebaseDatabase";
// import { actionTypes as gptActionTypes } from "@/store/modules/gptCars";
import { mapState } from "vuex";
import { actionTypes as databaseActionTypes } from "@/store/modules/firebaseDatabase";
import FeedCarListItem from "@/components/FeedCarListItem.vue";

export default {
  name: "AppFeedView",
  components: {
    FeedCarListItem,
  },
  computed: {
    ...mapState({
      data: (state) => state.gptCars.data,
      uid: (state) => state.auth.uid,
      otherCars: (state) => state.firebaseDatabase.otherCars,
    }),
  },
  data() {
    return {
      battles: undefined,
    };
  },
  methods: {},
  mounted() {
    this.$store
      .dispatch(databaseActionTypes.getBattleResults)
      .then((result) => {
        this.battles = result;
      });
  },
};
</script>
