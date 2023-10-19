import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "@/main.js";

const state = {
  downloadedCars: undefined,
};

export const actionTypes = {
  saveCar: "[database] save car",
  getCars: "[database] get cars",
};

export const mutationType = {
  saveCarSuccess: "[database] SaveCarSuccess ",
  getCarsSuccess: "[database] GetCarSuccess ",
};

const mutations = {
  [mutationType.saveCarSuccess]() {},
  [mutationType.getCarsSuccess](state, payload) {
    state.downloadedCars = payload;
  },
};

const actions = {
  [actionTypes.saveCar](context, { data }) {
    return new Promise((resolve) => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        addDoc(collection(db, "cars"), {
          data: data,
          user_id: user.uid,
        });
        resolve();
      });
    });
  },
  [actionTypes.getCars](context) {
    return new Promise((resolve) => {
      console.log("first state", state.downloadedCars);
      getDocs(collection(db, "cars")).then((result) => {
        let cars = [];
        result.docs.forEach((doc) => cars.push(doc.data()));
        context.commit(mutationType.getCarsSuccess, cars);
        resolve();
      });
    });
  },
};

export default {
  actions,
  mutations,
  state,
};
