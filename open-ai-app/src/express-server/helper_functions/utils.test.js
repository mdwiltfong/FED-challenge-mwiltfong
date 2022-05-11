const OpenAI = require("./utils");

describe("OpenAI Class", () => {
  it("OpenAI function returns response", async () => {
    const create_completion = jest.fn(() => {
      data: {
        choices: [{ text: "Hey" }];
      }
    });
    const resp = await OpenAI.create_completion("This is a test");
    expect(resp).toBe("This is a test");
  });
});
