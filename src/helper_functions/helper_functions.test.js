const populateStorage = require("./populateStorage").default;
const retrieveStorage = require("./retrieveStorage").default;

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

/* Write tests for populateStorage and retrieveStorage */
describe("Populate Storage Function Tests", () => {
  it("Function stores values into localStorage that is already empty", () => {
    const data = {
      prompt: "Say this is a test",
      response: "This is a test",
    };
    populateStorage(data);
    const storage = localStorage.getItem("openai");
    expect(JSON.parse(storage)).toEqual(
      expect.arrayContaining([
        {
          prompt: expect.any(String),
          response: expect.any(String),
        },
      ])
    );
  });
  it("Function stores values in localstorage that already has info", () => {
    const data = {
      prompt: "Say this is a test",
      response: "This is a test",
    };
    populateStorage(data);
    const data2 = {
      prompt: "Hi mom",
      response: "Hi son",
    };
    populateStorage(data2);

    const storage = localStorage.getItem("openai");
    expect(JSON.parse(storage)).toEqual(
      expect.arrayContaining([
        {
          prompt: "Say this is a test",
          response: "This is a test",
        },
        {
          prompt: "Hi mom",
          response: "Hi son",
        },
      ])
    );
  });
});

describe("Retrieve Storage", () => {
  beforeEach(() => {
    const data = [
      {
        prompt: "Say this is a test",
        response: "This is a test",
      },
    ];
    localStorage.setItem("openai", JSON.stringify(data));
  });
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
