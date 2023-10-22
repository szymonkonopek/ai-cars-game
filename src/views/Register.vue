<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register" class="mx-auto w-50 d-flex flex-column">
      <input type="text" placeholder="Email" v-model="email" />
      <input type="text" placeholder="Username" v-model="username" />
      <input type="password" placeholder="Password" v-model="password" />
      <button @click="register">Submit</button>
      <button @click="googleSignIn">Login With Google</button>
    </form>
  </div>
</template>

<script>
import { actionTypes } from "@/store/modules/auth";

export default {
  name: "AppRegisterView",
  methods: {
    register() {
      this.$store
        .dispatch(actionTypes.register, {
          email: this.email,
          password: this.password,
          username: this.username,
        })
        .then(() => {
          this.$router.push({ name: "feed" });
        });
    },
    googleSignIn() {
      this.$store.dispatch(actionTypes.signInWithGoogle).then(() => {
        this.$router.push({ name: "feed" });
      });
    },
  },
  data() {
    return {
      email: "",
      password: "",
      username: "",
    };
  },
};
</script>
