import stripeApi from "@/api/stripeApi";
import { loadStripe } from "@stripe/stripe-js";
const state = {};

export const actionTypes = {
  buyCars: "[stripe] buyCars",
};

export const mutationType = {
  buyCarsStart: "[stripe] buyCarsStart ",
  buyCarsFailure: "[stripe] buyCarsFailure ",
};

const actions = {
  [actionTypes.buyCars]() {
    return new Promise((resolve) => {
      stripeApi.createSession().then((resp) => {
        const sessionId = resp.id;
        loadStripe(`${process.env.VUE_APP_STRIPE_PUB_KEY}`)
          .then((stripe) => {
            stripe.redirectToCheckout({ sessionId });
            resolve();
          })
          .catch((error) => {
            console.log(error);
          });
      });
    });
  },
};

const mutations = {};

export default {
  actions,
  state,
  mutations,
};
