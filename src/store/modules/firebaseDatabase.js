import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, addDoc, where, query } from "firebase/firestore";
import { db } from "@/main.js";

const state = {
  otherCars: undefined,
  myCars: undefined,
};

export const actionTypes = {
  saveCar: "[database] save car",
  getNotMyCars: "[database] getNotMyCars",
  getMyCars: "[database] get my cars",
};

export const mutationType = {
  saveCarSuccess: "[database] SaveCarSuccess ",
  getNotMyCarsStart: "[database] getNotMyCarsStart ",
  getNotMyCarsSuccess: "[database] getNotMyCarsSuccess ",
  getMyCarsSuccess: "[database] GetMyCarSuccess ",
  getMyCarsStart: "[database] Get my cars Start ",
};

const mutations = {
  [mutationType.saveCarSuccess]() {},
  [mutationType.getNotMyCarsStart](state) {
    state.otherCars = undefined;
  },
  [mutationType.getNotMyCarsSuccess](state, payload) {
    state.otherCars = payload;
  },
  [mutationType.getMyCarsStart](state) {
    state.otherCars = undefined;
  },
  [mutationType.getMyCarsSuccess](state, payload) {
    state.myCars = payload;
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
  [actionTypes.getNotMyCars](context, { uid }) {
    console.log("hello");
    return new Promise((resolve) => {
      const q = query(collection(db, "cars"), where("user_id", "!=", uid));
      getDocs(q).then((result) => {
        let cars = [];
        result.docs.forEach((doc) => cars.push(doc.data()));
        context.commit(mutationType.getNotMyCarsSuccess, cars);
        console.log("cars", cars);
        resolve();
      });
    });
  },
  [actionTypes.getMyCars](context, { uid }) {
    console.log("uid", uid);
    return new Promise((resolve) => {
      context.commit(mutationType.getMyCarsStart);
      const q = query(collection(db, "cars"), where("user_id", "==", uid));
      getDocs(q).then((result) => {
        let cars = [];
        result.docs.forEach((doc) => cars.push(doc.data()));
        context.commit(mutationType.getMyCarsSuccess, cars);
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
