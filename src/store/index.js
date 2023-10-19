import { createStore } from "vuex";
import auth from "@/store/modules/auth";
import gptCars from "@/store/modules/gptCars";
import firebaseDatabase from "@/store/modules/firebaseDatabase";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth, gptCars, firebaseDatabase },
});
