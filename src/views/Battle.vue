<template>
  <div>
    <h1>Battle</h1>
    <CarFeed :cars="otherCars"></CarFeed>
    <MyCarFeed></MyCarFeed>
  </div>
</template>

<script>
import { actionTypes as authActionTypes } from "@/store/modules/auth";
import { actionTypes as firebaseActionTypes } from "@/store/modules/firebaseDatabase";
import CarFeed from "@/components/CarFeed";
import { mapState } from "vuex";
import MyCarFeed from "@/components/MyCarFeed";
export default {
  name: "AppBattle",
  components: {
    CarFeed,
    MyCarFeed,
  },
  computed: {
    ...mapState({
      otherCars: (state) => state.firebaseDatabase.otherCars,
      uid: (state) => state.auth.uid,
    }),
  },

  mounted() {
    this.$store.dispatch(authActionTypes.GetMyUid).then(() => {
      this.$store.dispatch(firebaseActionTypes.getNotMyCars, { uid: this.uid });
    });
  },
};
</script>
