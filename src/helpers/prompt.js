const params = {
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "user",
      content: ``,
    },
    {
      role: "system",
      content:
        "Give user real car specification of real car. Generate data for specific car brand with real data. Json format, colour in hex, weight in kg, all values in string",
    },
  ],
  max_tokens: 140,
  top_p: 1,
  temperature: 0.5,
  frequency_penalty: 0,
  presence_penalty: 0,
};

export default params;
