<template>
  <div>
    <div
      class="alert alert-danger"
      :class="{ 'd-none': !this.validationError }"
      role="alert"
    >
      {{ this.validationError }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mutationType } from "@/store/modules/auth";
export default {
  name: "ValidationError",
  computed: {
    ...mapState({
      validationError: (state) => state.auth.validationError,
    }),
  },
  mounted() {
    this.$store.commit(mutationType.authStart);
  },
};
</script>
