export const carParams = {
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "user",
      content: ``,
    },
    {
      role: "system",
      content:
        "Give user real car specification of real car. Generate data for specific car brand with real data. Json format, colour in hex, weight in kg, all values in string, all variable names lowercase, description is intresting fact (170 characters max)",
    },
  ],
  max_tokens: 200,
  top_p: 1,
  temperature: 0.5,
  frequency_penalty: 0,
  presence_penalty: 0,
};

export const versusParams = {
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "user",
      content: ``,
    },
    {
      role: "system",
      content:
        "Compare 2 cars by comparing their stats and tell which would win in specific category. You must select a winner. Return JSON file {'winner','explanation'}. Winner can only by 'car1' or 'car2'. Give short explanation (2 sentences)",
    },
  ],
  max_tokens: 200,
  top_p: 1,
  temperature: 0.5,
  frequency_penalty: 0,
  presence_penalty: 0,
};
