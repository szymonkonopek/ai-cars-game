<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link
          :to="{ name: 'home' }"
          v-if="!isLoggedIn"
          class="navbar-brand"
        >
          <i class="bi bi-car-front-fill m-4"></i
        ></router-link>
        <router-link
          :to="{ name: 'feed' }"
          class="navbar-brand"
          v-if="isLoggedIn"
        >
          <i class="bi bi-car-front-fill m-4"></i>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                :to="{ name: 'findOpponent' }"
                v-if="isLoggedIn"
                class="nav-link"
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
                :to="{ name: 'rewards' }"
                class="nav-link d-flex"
                v-if="isLoggedIn"
              >
                <i
                  class="bi bi-award-fill text-warning"
                  style="font-size: 15px"
                ></i>
                <div class="position-relative">
                  Rewards &#8203;
                  <span
                    v-if="this.availableCars && this.tempAvailableCars != 0"
                    class="position-absolute top-0 start-100 badge rounded-pill bg-warning"
                  >
                    {{ this.availableCars }}
                  </span>
                  <span
                    v-if="this.tempAvailableCars > 0"
                    class="position-absolute top-0 start-100 badge rounded-pill bg-warning"
                  >
                    {{ this.tempAvailableCars }}
                  </span>
                </div>
              </router-link>
            </li>
          </ul>
          <router-link
            :to="{ name: 'login' }"
            v-if="!isLoggedIn"
            class="btn btn-primary me-3 shadow-sm"
          >
            Sign In
          </router-link>
          <router-link
            :to="{ name: 'register' }"
            v-if="!isLoggedIn"
            class="btn btn-light me-3 shadow-lg"
          >
            Register
          </router-link>
          <button
            @click="handleSignOut"
            v-if="isLoggedIn"
            class="btn btn-light shadow-sm me-3"
          >
            Sign out
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
import { actionTypes as firebaseActionTypes } from "@/store/modules/firebaseDatabase";
import { actionTypes as authActionTypes } from "@/store/modules/auth";
import { mapState } from "vuex";

export default {
  name: "AppTopBar",
  data() {
    return {
      isLoggedIn: "",
      auth: "",
      availableCars: "",
    };
  },
  mounted() {
    this.auth = getAuth;
    this.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.$store.dispatch(authActionTypes.GetMyUid).then((id) => {
          this.$store
            .dispatch(firebaseActionTypes.getUserById, { id: id })
            .then((response) => {
              this.availableCars = response.available_cars;
            });
        });
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
  computed: {
    ...mapState({
      tempAvailableCars: (state) => state.firebaseDatabase.tempAvailableCars,
    }),
  },
};
</script>
