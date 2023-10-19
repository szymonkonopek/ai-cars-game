<template>
  <div>
    <h1>Login</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <input type="text" placeholder="Password" v-model="password" />
    <button @click="login">Submit</button>
    <button @click="signInWithGoogle">Login With Google</button>
  </div>
</template>

<script>
import { actionTypes } from "@/store/modules/auth";

export default {
  name: "AppLoginView",
  methods: {
    login() {
      this.$store
        .dispatch(actionTypes.login, {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "feed" });
        });
    },
    signInWithGoogle() {
      this.$store.dispatch(actionTypes.signInWithGoogle).then(() => {
        this.$router.push({ name: "feed" });
      });
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>
