<template>
  <div>
    <div class="m-5">
      <div class="d-flex justify-content-between">
        <div>{{ user1.username }}</div>
        <div>{{ user2.username }}</div>
      </div>
      <div class="card">
        <div class="card-body d-flex justify-content-between">
          <div class="text-success p-4">
            <div class="card-title">{{ car1.brand }}</div>
            <h6 class="card-subtitle mb-2 text-body-secondary text-nowrap">
              {{ car1.model }}
            </h6>
          </div>
          <div>
            <div class="card">
              <div class="card-body">{{ battleInfo.explanation }}</div>
            </div>
          </div>
          <div class="p-4">
            <div class="card-title text-danger">{{ car2.brand }}</div>
            <h6 class="card-subtitle mb-2 text-body-secondary text-nowrap">
              {{ car2.model }}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { actionTypes } from "@/store/modules/firebaseDatabase";
export default {
  name: "FeedCarList",
  props: {
    battle: {
      typeof: Object,
      required: true,
    },
  },
  data() {
    return {
      car1: this.battle.data().car1.data,
      car2: this.battle.data().car2.data,
      battleInfo: this.battle.data().result,
      user1: "",
      user2: "",
    };
  },
  mounted() {
    console.log(this.battle.data().car1.user_id);
    this.$store
      .dispatch(actionTypes.getUserById, {
        id: this.battle.data().car1.user_id,
      })
      .then((response) => {
        this.user1 = response;
      });

    this.$store
      .dispatch(actionTypes.getUserById, {
        id: this.battle.data().car2.user_id,
      })
      .then((response) => {
        this.user2 = response;
      });
  },
};
</script>
