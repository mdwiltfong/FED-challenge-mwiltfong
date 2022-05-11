const request = require("supertest");
const app = require("./app");

describe("Server Tests", () => {
  it("Server returns 200 on root route", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
  it("Client code sends properly structured payload", async () => {
    const response = await request(app).post("/create_completion").send({
      prompt: "This is a test",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        prompt: expect.any(String),
        response: expect.any(String),
      })
    );
  });
});
