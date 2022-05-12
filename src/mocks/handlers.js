import { rest } from "msw";
export const handlers = [
  rest.post("*/create_completion", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        prompt: "Say this is a test",
        response: "This is a test",
      })
    );
  }),
  rest.post(
    "https://api.openai.com/v1/engines/text-curie-001/completions",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          choices: [
            {
              text: "This is a test",
            },
          ],
        })
      );
    }
  ),
  rest.get("*/", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
