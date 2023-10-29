import { createStore } from "vuex";
import auth from "@/store/modules/auth";
import gptCars from "@/store/modules/gptCars";
import firebaseDatabase from "@/store/modules/firebaseDatabase";
import stripe from "@/store/modules/stripe";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth, gptCars, firebaseDatabase, stripe },
});
