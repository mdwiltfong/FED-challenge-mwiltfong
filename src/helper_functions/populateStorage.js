function populateStorage({ id, prompt, response }) {
  /* Populatestorage will add any responses to the client's browser. 
  It does this by first retrieving the client's storage, and then adding to it before sending it back.
  Since only strings can be store in localstorage, the information first needs to be parsed into a JSON object, and then
  converted back into a string before being stored. 
  */
  const currentStorage = JSON.parse(localStorage.getItem("openai"));
  let updatedStorage;
  if (currentStorage) {
    /* In order to make sure that stored results are rendered from newest to oldest, the function uses
    the spread operator to rearrange the information.
    */
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
