import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  where,
  query,
  deleteDoc,
  updateDoc,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import { db } from "@/main.js";

const state = {
  otherCars: undefined,
  myCars: undefined,
  otherSelectedCar: false,
  mySelectedCar: undefined,
  users: undefined,
  selectedUser: "",
  tempAvailableCars: undefined,
};

export const actionTypes = {
  saveCar: "[database] save car",
  getNotMyCars: "[database] getNotMyCars",
  getMyCars: "[database] get my cars",
  selectMyCar: "[database] select my car",
  selectOtherCar: "[database] select other car",
  getUsers: "[database] get users",
  getUserById: "[database] get user by id",
  getCarById: "[database] getCarById",
  deleteCarById: "[database] delete car by id",
  saveBattleResult: "[database] save battle result",
  getBattleResults: "[database] get battle results",
  updateRecord: "[database] update record",
};

export const mutationType = {
  saveCarSuccess: "[database] SaveCarSuccess ",
  getNotMyCarsStart: "[database] getNotMyCarsStart ",
  getNotMyCarsSuccess: "[database] getNotMyCarsSuccess ",
  getMyCarsSuccess: "[database] GetMyCarSuccess ",
  getMyCarsStart: "[database] Get my cars Start ",
  selectMyCarIdSuccess: "[database] Set my car id Success",
  selectOtherCarIdSuccess: "[database] Set other car id Success",
  setUsersSuccess: "[database] set Users Success",
  setSelectedUser: "[database] setSelectedUser",
  getCarById: "[database] get car by id success",
  getBattleResultsSuccess: "[database] getBattleResultsSuccess",
  setAvailableCars: "[database] setAvailableCars",
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
  [mutationType.selectMyCarIdSuccess](state, payload) {
    state.mySelectedCar = payload;
  },
  [mutationType.selectOtherCarIdSuccess](state, payload) {
    state.otherSelectedCar = payload;
  },
  [mutationType.setSelectedUser](state, payload) {
    state.selectedUser = payload;
  },
  [mutationType.setUsersSuccess](state, payload) {
    state.users = payload;
  },
  [mutationType.getCarByIdSuccess](state, payload) {
    state.users = payload;
  },
  [mutationType.getBattleResultsSuccess](state, payload) {
    state.battles = payload;
  },
  [mutationType.setAvailableCars](state, payload) {
    state.tempAvailableCars = payload;
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
    return new Promise((resolve) => {
      const q = query(collection(db, "cars"), where("user_id", "==", uid));
      getDocs(q).then((result) => {
        let cars = [];
        result.docs.forEach((doc) => cars.push(doc));
        context.commit(mutationType.getNotMyCarsSuccess, cars);
        resolve();
      });
    });
  },
  [actionTypes.getMyCars](context, { uid }) {
    return new Promise((resolve) => {
      context.commit(mutationType.getMyCarsStart);
      const q = query(collection(db, "cars"), where("user_id", "==", uid));
      getDocs(q).then((result) => {
        let cars = [];
        result.docs.forEach((doc) => cars.push(doc));
        context.commit(mutationType.getMyCarsSuccess, cars);
        resolve();
      });
    });
  },
  [actionTypes.selectMyCar](context, { id }) {
    return new Promise((resolve) => {
      context.commit(mutationType.selectMyCarIdSuccess, id);
      resolve();
    });
  },
  [actionTypes.selectOtherCar](context, { id }) {
    return new Promise((resolve) => {
      context.commit(mutationType.selectOtherCarIdSuccess, id);
      resolve();
    });
  },
  [actionTypes.getUserById](context, { id }) {
    return new Promise((resolve) => {
      const q = query(doc(db, "users", id));
      getDoc(q).then((result) => {
        resolve(result.data());
      });
    });
  },
  [actionTypes.getUsers](context, { uid }) {
    return new Promise((resolve) => {
      const q = query(collection(db, "users"), where("user_id", "!=", uid));
      getDocs(q).then((result) => {
        context.commit(mutationType.setUsersSuccess, result.docs);
        resolve();
      });
    });
  },
  [actionTypes.getCarById](context, { id }) {
    return new Promise((resolve) => {
      const q = query(doc(db, "cars", id));
      getDoc(q).then((result) => {
        resolve(result.data());
      });
    });
  },
  [actionTypes.deleteCarById](context, { id }) {
    console.log("da", id);
    return new Promise((resolve) => {
      const q = query(doc(db, "cars", id));
      deleteDoc(q).then(() => {
        resolve();
      });
    });
  },
  [actionTypes.saveBattleResult](context, { car1, car2, result }) {
    return new Promise((resolve) => {
      addDoc(collection(db, "battles"), {
        car1: car1,
        car2: car2,
        result: result,
        created: serverTimestamp(),
      }).then(() => {
        resolve();
      });
    });
  },
  [actionTypes.getBattleResults](context) {
    return new Promise((resolve) => {
      const q = query(collection(db, "battles"), orderBy("created"));
      getDocs(q).then((result) => {
        context.commit(mutationType.getBattleResultsSuccess, result.docs);
        resolve(result.docs);
      });
    });
  },
  [actionTypes.updateRecord](context, { collectionName, recordName, keyItem }) {
    return new Promise((resolve) => {
      updateDoc(doc(db, collectionName, recordName), keyItem).then(() => {
        console.log("record updated");
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
