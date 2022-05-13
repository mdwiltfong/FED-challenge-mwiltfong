function populateStorage({ id, prompt, response }) {
  const currentStorage = JSON.parse(localStorage.getItem("openai"));
  let updatedStorage;
  if (currentStorage) {
    updatedStorage = [
      { id: id, prompt: prompt, response: response },
      ...currentStorage,
    ];
  } else {
    updatedStorage = [{ id: id, prompt: prompt, response: response }];
  }
  localStorage.setItem("openai", JSON.stringify(updatedStorage));
}

export default populateStorage;
