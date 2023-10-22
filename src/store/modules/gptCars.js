import gptApi from "@/api/gptApi";
import { carParams, versusParams } from "@/helpers/prompt";
import carList from "@/helpers/carList";
import categoryList from "@/helpers/categoryList";

const state = {
  data: undefined,
};

export const actionTypes = {
  getCar: "[gpt] getCar",
  getVersusCarsResults: "[gpt] getVersusCarsResult",
};

export const mutationType = {
  getCarSuccess: "[auth] getCarSuccess ",
};

const mutations = {
  [mutationType.getCarSuccess](state, payload) {
    state.data = payload;
  },
};

const randomItem = function (obj) {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};

const actions = {
  [actionTypes.getCar](context) {
    const carStats = randomItem(carList);
    carParams.messages[0].content = `Create car spec: Brand = ${carStats.name}, model, horsepower , type, weight, colour, price_in_usd, production_year`;
    return new Promise((resolve) => {
      gptApi.getCar(carParams).then((response) => {
        const data = JSON.parse(response.choices[0].message.content);
        data.logoImg = carStats.logo;
        context.commit(mutationType.getCarSuccess, data);
        resolve();
      });
    });
  },
  [actionTypes.getVersusCarsResults](context, { car1, car2 }) {
    versusParams.messages[0].content = `compare ${car1.data.brand} and ${
      car2.data.brand
    }. car1: ${JSON.stringify(car1.data)}. car2: ${JSON.stringify(
      car2.data
    )}. Category: ${randomItem(categoryList)}`;
    return new Promise((resolve) => {
      gptApi.compareCars(versusParams).then((response) => {
        console.log("api", response.choices[0].message.content);
        resolve(response.choices[0].message.content);
      });
    });
  },
};

export default {
  actions,
  state,
  mutations,
};
