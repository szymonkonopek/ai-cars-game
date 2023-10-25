import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/main.js";

export const actionTypes = {
  register: "[auth] Register",
  login: "[auth] Login",
  updateCurrentUser: "[auth] UpdateCurrentUser",
  logout: "[auth] logout",
  signInWithGoogle: "[auth] sing in with google",
  GetMyUid: "[auth] my uid",
};

const state = {
  uid: undefined,
  validationError: undefined,
};

export const mutationType = {
  authStart: "[auth] authStart ",
  authFailure: "[auth] authFailure ",
};

const mutations = {
  [mutationType.authFailure](state, payload) {
    switch (payload) {
      case "auth/invalid-email":
        state.validationError = "Invalid Email";
        break;
      case "auth/missing-password":
        state.validationError = "Please enter your password";
        break;
      case "auth/invalid-login-credentials":
        state.validationError = "Invalid password";
        break;
      case "auth/email-already-in-use":
        state.validationError = "Email already in use";
        break;
      case "auth/weak-password":
        state.validationError = "Password requires min. 6 characters";
    }
  },
  [mutationType.authStart](state) {
    state.validationError = "";
  },
};

const actions = {
  [actionTypes.register](contenxt, credentials) {
    return new Promise((resolve) => {
      contenxt.commit(mutationType.authStart);
      createUserWithEmailAndPassword(
        getAuth(),
        credentials.email,
        credentials.password
      )
        .then(() => {
          const auth = getAuth();
          onAuthStateChanged(auth, (user) => {
            setDoc(doc(db, "users", user.uid), {
              username: credentials.username,
              user_id: user.uid,
              available_cars: 5,
            });
            resolve();
          });
        })
        .catch((error) => {
          contenxt.commit(mutationType.authFailure, error.code);
        });
    });
  },
  [actionTypes.signInWithGoogle]() {
    return new Promise((resolve) => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          setDoc(doc(db, "users", result.user.uid), {
            user_id: result.user.uid,
            username: result.user.displayName,
            available_cars: 5,
          });
          resolve();
        })
        .catch((error) => {
          console.log(error.code);
        });
    });
  },
  [actionTypes.login](contenxt, credentials) {
    return new Promise((resolve) => {
      contenxt.commit(mutationType.authStart);
      const auth = getAuth();
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((response) => {
          console.log(response);
          resolve();
        })
        .catch((error) => {
          contenxt.commit(mutationType.authFailure, error.code);
        });
    });
  },
  [actionTypes.GetMyUid]() {
    return new Promise((resolve) => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        state.uid = user.uid;
        resolve(user.uid);
      });
    });
  },
};

export default {
  actions,
  state,
  mutations,
};
