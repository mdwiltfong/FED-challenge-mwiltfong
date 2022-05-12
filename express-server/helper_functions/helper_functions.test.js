const OpenAI = require("./utils");
const populateStorage = require("./populateStorage");
const retrieveStorage = require("./retrieveStorage");
describe("OpenAI Class", () => {
  it("OpenAI function returns response", async () => {
    const resp = await OpenAI.create_completion("This is a test");
    expect(resp).toBe("This is a test.");
  });
});

/* Write tests for populateStorage and retrieveStorage */
describe("Populate Storage Function Tests", () => {
  it("Function stores values into localStorage", () => {
    const data = {
      prompt: "Say this is a test",
      response: "This is a test",
    };
    populateStorage(data);
    const storage = localStorage.openai;
    expect(JSON.parse(localStorage.getItem("openai"))).toEqual(
      expect.arrayContaining([
        {
          prompt: expect.any(String),
          response: expect.any(String),
        },
      ])
    );
  });
});
describe("Retrieve Storage", () => {
  it("Retrieve storage function retrieves any values in localStorage", () => {
    const storage = retrieveStorage();
    expect(storage).toEqual(
      expect.arrayContaining([
        {
          prompt: expect.any(String),
          response: expect.any(String),
        },
      ])
    );
  });
});

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();
