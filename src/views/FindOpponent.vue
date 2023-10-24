<template>
  <div style="margin-top: 5rem">
    <h1 class="ms-5">Select your opponent</h1>
    <div class="d-flex justify-content-between p-5">
      <MyCarFeed :isCol="true"></MyCarFeed>
      <CarFeed :cars="otherCars" :isCol="true" :isInfoVisible="false"></CarFeed>
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
import { mutationType } from "@/store/modules/firebaseDatabase";

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
  mounted() {
    this.$store.commit(mutationType.setSelectedUser, "");
    this.$store.commit(mutationType.getNotMyCarsSuccess);
    this.$store.commit(mutationType.selectOtherCarIdSuccess, "");
  },
};
</script>
