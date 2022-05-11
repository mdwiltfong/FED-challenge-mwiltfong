const OpenAI = require("./utils");

describe("OpenAI Class", () => {
  it("OpenAI function returns response", async () => {
    const resp = await OpenAI.create_completion("This is a test");
    expect(resp).toBe("This is a test");
  });
});
