<template>
  <div>
    home
    <router-link :to="{ name: 'login' }">Login</router-link>
    <router-link :to="{ name: 'register' }">Register</router-link>
  </div>
</template>

<script>
export default {
  name: "AppHomeView",
};
</script>
