export function populateStorage({ prompt, response }) {
  const currentStorage = JSON.parse(localStorage.getItem("openai"));
  let updatedStorage;
  if (currentStorage) {
    updatedStorage = [
      ...currentStorage,
      { prompt: prompt, response: response },
    ];
  } else {
    updatedStorage = [{ prompt: prompt, response: response }];
  }
  localStorage.setItem("openai", JSON.stringify(updatedStorage));
}

/* Todo: Create a retrieveStorage function */
