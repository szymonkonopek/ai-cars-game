<template>
  <div v-if="!selectedUser">
    <h2>Users</h2>
    <div class="d-flex flex-column overflow-auto" style="max-height: 60vh">
      <div v-for="(user, index) in users" :key="index">
        <UserBattleItem :user="user.data()" />
      </div>
    </div>
  </div>
</template>

<script>
import { actionTypes as authActionTypes } from "@/store/modules/auth";
import { actionTypes as databaseActionTypes } from "@/store/modules/firebaseDatabase";

import { mapState } from "vuex";
import UserBattleItem from "./UserBattleItem.vue";

export default {
  name: "UserBattleList",
  components: {
    UserBattleItem,
  },
  mounted() {
    this.$store.dispatch(authActionTypes.GetMyUid).then(() => {
      this.$store.dispatch(databaseActionTypes.getUsers, { uid: this.uid });
    });
  },
  computed: {
    ...mapState({
      users: (state) => state.firebaseDatabase.users,
      uid: (state) => state.auth.uid,
      selectedUser: (state) => state.firebaseDatabase.selectedUser,
    }),
  },
};
</script>
