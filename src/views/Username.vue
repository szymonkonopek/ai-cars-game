<template>
  <div>
    <div>username</div>
    <form @submit.prevent="submit">
      <input type="text" placeholder="username" v-model="username" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AppUsername",
  methods: {
    submit() {},
  },
  data() {
    return {
      username: "",
    };
  },
};
</script>
