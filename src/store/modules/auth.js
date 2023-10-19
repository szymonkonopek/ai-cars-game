import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const actionTypes = {
  register: "[auth] Register",
  login: "[auth] Login",
  getCurrentUser: "[auth] GetCurrentUser",
  updateCurrentUser: "[auth] UpdateCurrentUser",
  logout: "[auth] logout",
  signInWithGoogle: "[auth] sing in with google",
};

const actions = {
  [actionTypes.register](contenxt, credentials) {
    return new Promise((resolve) => {
      createUserWithEmailAndPassword(
        getAuth(),
        credentials.email,
        credentials.password
      )
        .then((data) => {
          console.log(data);
          resolve();
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
          console.log(result);
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
};

export default {
  actions,
};
