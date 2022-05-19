function retrieveStorage() {
  /* This function retrieves any storage in the client's browser and then parses it into a JSON object.
 In the event there are no responses in the local storage, it returns null. 
 
 */

  if (localStorage.getItem("openai")) {
    return JSON.parse(localStorage.getItem("openai"));
  } else {
    return null;
  }
}

export default retrieveStorage;
