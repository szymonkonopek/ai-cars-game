import gptApi from "@/api/gptApi";
import params from "@/helpers/prompt";
import carList from "@/helpers/carList";

const state = {
  data: undefined,
};

export const actionTypes = {
  getCar: "[gpt] getCar",
};

export const mutationType = {
  getCarSuccess: "[auth] getCarSuccess ",
};

const mutations = {
  [mutationType.getCarSuccess](state, payload) {
    state.data = payload;
  },
};

const randomCar = function (obj) {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};

const actions = {
  [actionTypes.getCar](context) {
    const carStats = randomCar(carList);
    params.messages[0].content = `Create car spec: Brand = ${carStats.name}, model, horsepower , type, weight, colour, price_in_usd, production_year`;
    // params.messages[0].content = `Create car spec: Brand = Lexus, model = LFA, horsepower, type, weight, colour, price`;

    return new Promise((resolve) => {
      gptApi.getCar(params).then((response) => {
        const data = JSON.parse(response.choices[0].message.content);
        data.logoImg = carStats.logo;
        context.commit(mutationType.getCarSuccess, data);
        resolve();
      });
    });
  },
};

export default {
  actions,
  state,
  mutations,
};
