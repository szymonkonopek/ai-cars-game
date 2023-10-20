<template>
  <div><my-car-feed :cars="cars"></my-car-feed></div>
</template>

<script>
import { actionTypes as authActionTypes } from "@/store/modules/auth";
import { actionTypes as firebaseActionTypes } from "@/store/modules/firebaseDatabase";
import MyCarFeed from "@/components/MyCarFeed";
import { mapState } from "vuex";

export default {
  name: "AppEquipment",
  computed: {
    ...mapState({
      uid: (state) => state.auth.uid,
      cars: (state) => state.firebaseDatabase.myCars,
    }),
  },
  components: {
    MyCarFeed,
  },
  mounted() {
    this.$store.dispatch(authActionTypes.GetMyUid).then(() => {
      this.$store.dispatch(firebaseActionTypes.getMyCars, { uid: this.uid });
    });
  },
};
</script>
