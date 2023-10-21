<template>
  <div>
    <h1>Battle</h1>
    <div class="d-flex justify-content-around">
      <MyCarFeed :isCol="true"></MyCarFeed>
      <CarFeed :cars="otherCars" :isCol="true"></CarFeed>
      <UserBattleList></UserBattleList>
      <BattleButton></BattleButton>
    </div>
  </div>
</template>

<script>
import UserBattleList from "@/components/UserBattleList.vue";
import CarFeed from "@/components/CarFeed.vue";
import { mapState } from "vuex";
import MyCarFeed from "@/components/MyCarFeed.vue";
import BattleButton from "@/components/BattleButton.vue";

export default {
  name: "AppBattle",
  components: {
    CarFeed,
    MyCarFeed,
    UserBattleList,
    BattleButton,
  },
  computed: {
    ...mapState({
      otherCars: (state) => state.firebaseDatabase.otherCars,
      uid: (state) => state.auth.uid,
    }),
  },
};
</script>
