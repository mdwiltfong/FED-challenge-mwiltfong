const dotenv = require("dotenv");
const axios = require("axios");
const env = dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

class OpenAI {
  static async create_completion(prompt) {
    try {
      //const config = { Authorization: `Bearer ${OPENAI_API_KEY}` };
      const data = {
        prompt: prompt,
        temperature: 0,
        max_tokens: 6,
      };
      const resp = await axios.post(
        "https://api.openai.com/v1/engines/text-curie-001/completions",
        data,
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
        }
      );
      return resp.data.choices[0].text.trim();
    } catch (error) {
      throw Error(error.message);
    }
  }
}

module.exports = OpenAI;
