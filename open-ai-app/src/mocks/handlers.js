import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:3001/create_completion", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        prompt: "Say this is a test",
        max_tokens: 5,
        temperature: 1,
        top_p: 1,
        n: 1,
        stream: false,
        logprobs: null,
        stop: "\n",
      })
    );
  }),
];
