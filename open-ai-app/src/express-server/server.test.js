const request = require("supertest");
const app = require("./app");

describe("Server Tests", () => {
  it("Server returns 200 on root route", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
  it("Client code sends properly structured payload", async () => {
    const response = await request(app).post("/create_completion");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe(
      expect.objectContaining({
        id: expect.any(String),
        object: "text_completion",
        created: expect.any(Number),
        model: "text-curie:001",
        choices: [
          {
            text: expect.any(String),
            index: 0,
            logprobs: null,
            finish_reason: "length",
          },
        ],
      })
    );
  });
});
