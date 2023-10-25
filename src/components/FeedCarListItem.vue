<template>
  <div>
    <div class="ms-5 me-5 mb-5">
      <div class="d-flex justify-content-between">
        <div>{{ user1.username }}</div>
        <div>{{ user2.username }}</div>
      </div>
      <div class="card">
        <div class="card-body d-flex justify-content-between">
          <div
            class="p-4"
            :class="
              battleInfo.winner == 'car1'
                ? { 'text-success': true }
                : { 'text-danger': true }
            "
          >
            <div class="card-title">
              {{ car1.brand }} <span class="fw-bold">{{ car1.model }}</span>
            </div>
          </div>
          <div
            class="p-4"
            :class="
              battleInfo.winner == 'car2'
                ? { 'text-success': true }
                : { 'text-danger': true }
            "
          >
            <div class="card-title">
              {{ car2.brand }} <span class="fw-bold">{{ car2.model }}</span>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="card w-75">
            <div class="text-center text-secondary">
              {{ battleInfo.category }}
            </div>
            <div class="card-body text-center">
              {{ battleInfo.explanation }}
            </div>
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
