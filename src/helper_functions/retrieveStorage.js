function retrieveStorage() {
  /* Write function for retrieving storage.
     Keep in mind that maybe populateStorage needs to be refactored */

  if (localStorage.getItem("openai")) {
    return JSON.parse(localStorage.getItem("openai"));
  } else {
    return null;
  }
}

export default retrieveStorage;
