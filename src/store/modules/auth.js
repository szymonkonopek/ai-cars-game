import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { mutationType } from "./gptCars";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/main.js";

export const actionTypes = {
  register: "[auth] Register",
  login: "[auth] Login",
  getCurrentUser: "[auth] GetCurrentUser",
  updateCurrentUser: "[auth] UpdateCurrentUser",
  logout: "[auth] logout",
  signInWithGoogle: "[auth] sing in with google",
  GetMyUid: "[auth] my uid",
};

const state = {
  uid: undefined,
};

const actions = {
  [actionTypes.register](contenxt, credentials) {
    return new Promise((resolve) => {
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
            });
            resolve();
          });
        })
        .catch((error) => {
          console.log(error.code);
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
      const auth = getAuth();
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((response) => {
          console.log(response);
          resolve();
        })
        .catch((error) => {
          console.log(error.code);
        });
    });
  },
  [actionTypes.GetMyUid]() {
    return new Promise((resolve) => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        state.uid = user.uid;
        resolve();
      });
    });
  },
};

export default {
  actions,
  state,
  mutationType,
};
