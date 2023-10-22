<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link :to="{ name: 'home' }" v-if="!isLoggedIn" class="navbar-brand">
      <i class="bi bi-car-front-fill"></i> Home</router-link
    >
    <router-link :to="{ name: 'feed' }" class="navbar-brand" v-if="isLoggedIn">
      <i class="bi bi-car-front-fill"></i>
      Feed</router-link
    >
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link
            :to="{ name: 'findOpponent' }"
            class="nav-link"
            v-if="isLoggedIn"
            >Find opponent</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'equipment' }"
            v-if="isLoggedIn"
            class="nav-link"
            >Equipment</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'findOpponent' }"
            class="nav-link"
            v-if="isLoggedIn"
            >Find opponent</router-link
          >
        </li>
      </ul>
    </div>
    <button @click="handleSignOut" v-if="isLoggedIn" class="btn btn-light">
      Sign out
    </button>
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
