<template>
  <div>
    <h1>Battle</h1>
    <div class="d-flex justify-content-around">
      <MyCarFeed :isCol="true"></MyCarFeed>
      <CarFeed :cars="otherCars" :isCol="true"></CarFeed>
      <UserBattleList></UserBattleList>
    </div>
  </div>
</template>

<script>
import { actionTypes as authActionTypes } from "@/store/modules/auth";
import { actionTypes as firebaseActionTypes } from "@/store/modules/firebaseDatabase";
import UserBattleList from "@/components/UserBattleList.vue";
import CarFeed from "@/components/CarFeed.vue";
import { mapState } from "vuex";
import MyCarFeed from "@/components/MyCarFeed.vue";
export default {
  name: "AppBattle",
  components: {
    CarFeed,
    MyCarFeed,
    UserBattleList,
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
