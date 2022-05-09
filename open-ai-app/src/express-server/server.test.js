// src/mocks/server.js
import { setupServer } from "msw/node";
import { handlers } from "../mocks/handlers";
const request = require("supertest");
// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);

beforeAll(() => {
  server.listen({
    onUnhandledRequest(req) {
      console.error(
        "Found an unhandled %s request to %s",
        req.method,
        req.url.href
      );
    },
  });
});

afterAll(() => {
  server.close();
});

describe("Express Tests", () => {
  it("Express server is running", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual("App is listening on port 8000");
  });
});
