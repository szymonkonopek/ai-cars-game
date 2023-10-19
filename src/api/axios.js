import axios from "axios";

const client = axios.create({
  headers: {
    Authorization: "Bearer " + `${process.env.VUE_APP_OPENAI_KEY}`,
  },
});

const params = {
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "user",
      content:
        "Create car spec: Brand, model, horsepower, type, weight in kg, colour, price",
    },
    {
      role: "system",
      content:
        "Your job is to give the user real car specification of real cars. Choose random and interesting car brands but with real data. Json format, colour in hex",
    },
  ],
  max_tokens: 128,
  top_p: 1,
  temperature: 0.5,
  frequency_penalty: 0,
  presence_penalty: 0,
};

const getData = () => {
  client
    .post("https://api.openai.com/v1/chat/completions", params)
    .then((result) => {
      console.log(result.data);
    });
};

export default {
  getData,
};
