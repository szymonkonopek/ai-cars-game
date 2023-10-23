<template>
  <div style="margin-top: 7rem">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-7 col-lg-5">
          <div class="login-wrap p-4 p-md-5">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="fa fa-user-o"></span>
            </div>
            <h3 class="text-center mb-3">Register</h3>
            <ValidationError class="mb-1" />
            <form action="#" class="login-form" @submit.prevent="register">
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control rounded-left shadow-sm"
                  placeholder="email"
                  required=""
                  v-model="email"
                />
              </div>
              <div class="form-group d-flex mb-3">
                <input
                  type="text"
                  class="form-control rounded-left shadow-sm"
                  placeholder="Username"
                  required=""
                  v-model="username"
                />
              </div>
              <div class="form-group d-flex mb-3">
                <input
                  type="password"
                  class="form-control rounded-left"
                  placeholder="Password"
                  required=""
                  v-model="password"
                />
              </div>
              <div class="form-group mb-2">
                <button
                  type="submit"
                  class="form-control btn btn-primary rounded submit px-3 shadow-sm"
                  @click="register"
                >
                  Login
                </button>
              </div>
              <!-- <div class="form-group d-md-flex">
                <div class="w-50">
                  <label class="checkbox-wrap checkbox-primary"
                    >Remember Me
                    <input type="checkbox" checked="" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="w-50 text-md-right">
                  <a href="#">Forgot Password</a>
                </div>
              </div> -->
            </form>
            <button
              type="submit"
              class="form-control btn btn-light rounded submit px-3 shadow-sm"
              @click="googleSignIn"
            >
              Sign in with <i class="bi bi-google text-primary"></i>oogle
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { actionTypes } from "@/store/modules/auth";
import ValidationError from "@/components/ValidationError.vue";

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
  components: {
    ValidationError,
  },
};
</script>
