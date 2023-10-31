const stripe = require("stripe")(`${process.env.VUE_APP_STRIPE_PRIVATE_KEY}`);

const createSession = () => {
  return stripe.checkout.sessions
    .create({
      success_url: `${process.env.VUE_APP_STRIPE_SUCCESS}`,
      cancel_url: `http://localhost:8080/equipment`,
      line_items: [{ price: "price_1O7FaTLaHNzWFHvrjJRXvzPz", quantity: 1 }],
      mode: "payment",
    })
    .then((resp) => {
      console.log(resp);
      return resp;
    });
};

export default {
  createSession,
};
