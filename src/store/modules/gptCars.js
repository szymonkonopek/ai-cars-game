import gptApi from "@/api/gptApi";
import { carParams, versusParams } from "@/helpers/prompt";
import carList from "@/helpers/carList";
import categoryList from "@/helpers/categoryList";

const state = {
  data: undefined,
  isLoading: false,
};

export const actionTypes = {
  getCar: "[gpt] getCar",
  getVersusCarsResults: "[gpt] getVersusCarsResult",
};

export const mutationType = {
  getCarSuccess: "[gpt] getCarSuccess ",
  getCarStart: "[gpt] getCarStart",
  getVersusCarsResultsStart: "[gpt] getVersusCarsResultsStart",
  getVersusCarsResultsSuccess: "[gpt] getVersusCarsResultsSuccess",
};

const mutations = {
  [mutationType.getCarSuccess](state, payload) {
    state.data = payload;
    state.isLoading = false;
  },
  [mutationType.getCarStart](state) {
    state.isLoading = true;
  },
  [mutationType.getVersusCarsResultsStart](state) {
    state.isLoading = true;
  },
  [mutationType.getVersusCarsResultsSuccess](state) {
    state.isLoading = false;
  },
};

const randomItem = function (obj) {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};

const actions = {
  [actionTypes.getCar](context) {
    const carStats = randomItem(carList);
    carParams.messages[0].content = `Create car spec: Brand = ${carStats.name}, model, horsepower , type, weight, colour, price_in_usd, production_year, description`;
    return new Promise((resolve) => {
      context.commit(mutationType.getCarStart);
      gptApi.getCar(carParams).then((response) => {
        const data = JSON.parse(response.choices[0].message.content);
        data.logoImg = carStats.logo;
        context.commit(mutationType.getCarSuccess, data);
        resolve(data);
      });
    });
  },
  [actionTypes.getVersusCarsResults](context, { car1, car2 }) {
    context.commit(mutationType.getVersusCarsResultsStart);
    const category = randomItem(categoryList);
    versusParams.messages[0].content = `compare ${car1.data.brand} and ${
      car2.data.brand
    }. car1: ${JSON.stringify(car1.data)}. car2: ${JSON.stringify(
      car2.data
    )}. Category: ${category}`;
    return new Promise((resolve) => {
      gptApi.compareCars(versusParams).then((response) => {
        const jsonResponse = JSON.parse(response.choices[0].message.content);
        jsonResponse["category"] = category;
        context.commit(mutationType.getVersusCarsResultsSuccess);
        resolve(jsonResponse);
      });
    });
  },
};

export default {
  actions,
  state,
  mutations,
};
