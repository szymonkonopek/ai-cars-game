<template>
  <nav>
    <router-link :to="{ name: 'home' }" v-if="!isLoggedIn">Home</router-link>
    <router-link :to="{ name: 'feed' }" v-if="isLoggedIn">Feed</router-link>
    <router-link :to="{ name: 'findOpponent' }" v-if="isLoggedIn"
      >Find opponent</router-link
    >

    <router-link :to="{ name: 'equipment' }" v-if="isLoggedIn"
      >Equipment</router-link
    >

    <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
  </nav>
</template>

<script>
import { getAuth } from "firebase/auth";

export default {
  name: "AppTopBar",
  data() {
    return {
      isLoggedIn: "",
      auth: "",
    };
  },
  mounted() {
    this.auth = getAuth;
    this.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  },
  methods: {
    handleSignOut() {
      this.auth()
        .signOut(this.auth)
        .then(() => {
          this.$router.push({ name: "home" });
        });
    },
  },
};
</script>
