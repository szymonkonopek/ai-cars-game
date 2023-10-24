<template>
  <button @click="handleClick" class="card m-2" style="width: 18rem">
    <!-- <img
      class="card-img-top"
      :src="carData.data.logoImg"
      alt="Card image cap"
    /> -->
    <div class="card-body text-left">
      <h5 class="card-title">{{ user.username }}</h5>
    </div>
  </button>
</template>

<script>
import { mutationType } from "@/store/modules/firebaseDatabase";
import { actionTypes as firebaseActionTypes } from "@/store/modules/firebaseDatabase";

export default {
  name: "UserBattleItem",
  props: {
    user: {
      typeof: Object,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$store.commit(mutationType.setSelectedUser, this.user);
      this.$store.dispatch(firebaseActionTypes.getNotMyCars, {
        uid: this.user.user_id,
      });
    },
  },
};
</script>
