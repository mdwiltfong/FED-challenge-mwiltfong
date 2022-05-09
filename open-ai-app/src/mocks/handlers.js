import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:3001/create_completion", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: "cmpl-560uhqEKyyhmPQxkfrmCBB0Aulk1q",
        object: "text_completion",
        created: 1652115163,
        model: "text-curie:001",
        choices: [
          {
            text: " message\n\nHey, I",
            index: 0,
            logprobs: null,
            finish_reason: "length",
          },
        ],
      })
    );
  }),
  rest.get("/", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
