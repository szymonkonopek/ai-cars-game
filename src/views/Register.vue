<template>
  <div>
    <h1>Register</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <input type="text" placeholder="Password" v-model="password" />
    <button @click="register">Submit</button>
    <button @click="googleSignIn">Login With Google</button>
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
    };
  },
};
</script>
