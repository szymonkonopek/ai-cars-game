<template>
  <div class="mt-2">
    <div class="paralax shadow position-relative">
      <div class="position-absolute top-50 start-50 translate-middle">
        <div class="card shadow-lg">
          <div class="card-body d-flex align-items-start flex-column">
            <h5 class="card-title">
              AI powered car card game. <br />Build your car collection and
              challange your friends.
            </h5>
            <router-link
              :to="{ name: 'feed' }"
              class="align-self-center btn btn-primary"
            >
              Let's race!
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div style="height: 1000px"></div>
  </div>
</template>

<script>
import "@/../public/paralax.css";

export default {
  name: "AppHomeView",
};
</script>
