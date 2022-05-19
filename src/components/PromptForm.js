import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import Response from "./Response";
import retrieveStorage from "../helper_functions/retrieveStorage";
import populateStorage from "../helper_functions/populateStorage";
import "./styles/PromptForm.css";

const PromptForm = () => {
  /* This component will be the main component of the app. It will host the state of the form as well as make API calls. */
  const INITIAL_STATE = {
    engine: "text-curie-001",
    textarea: "",
  };

  /* The app dropdown box will default to text-curie-001 */
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [responses, setResponses] = useState([]);
  useEffect(() => {
    const storedResponses = retrieveStorage() || null;
    /* Upon loading the page, the app will retrieve, if any, responses stored in the browser under 'openai' */
    if (storedResponses) {
      setResponses(storedResponses);
      /* If there are any responses stored, the state of `responses` will be updated */
    }
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = {
        id: uuid(),
        /* uuid will help create unique keys for the responses */
        prompt: formData.textarea,
      };
      const config = {
        params: { engine: formData.engine },
      };

      const {
        data: { prompt, response },
      } = await axios.post(
        "https://openai-app-mw.herokuapp.com/create_completion",
        data,
        config
      );
      /* This is the live server endpoint */
      populateStorage({ id: uuid(), prompt: prompt, response: response });
      /* Upon a successful response, data will be stored in the browser through `populateStorage` */
      setResponses((prevResponses) => [
        { id: uuid(), response: response, prompt: prompt },
        ...prevResponses,
      ]);
      /* Using the spread operator, we can assure that responses will be loaded from newest to oldest */
    } catch (error) {
      console.log(error);
    }
  };

  /* The following handleChange functions will make sure the state of the form is updated when there are any changes */
  const handleChangeTextArea = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData);
  };
  /* In the even there are no responses stored in the browser, the page will show a default prompt instructing the user to create responses */
  let responseContent;
  if (responses.length > 0) {
    responseContent = (
      <>
        <h2>Responses</h2>
        <ul aria-label="Responses" style={{ listStyle: "none", padding: "0" }}>
          {responses.map((response) => (
            <Response
              key={response.id}
              prompt={response.prompt}
              response={response.response}
            />
            /* The response component will host the logic for the responses from Openai */
          ))}
        </ul>
      </>
    );
  } else {
    responseContent = (
      <>
        <h2 aria-label="Responses">Responses</h2>
        <p aria-label="Submit a prompt to get a response from the Open AI API!">
          Submit a prompt to get a response from the Open AI API!
        </p>
      </>
    );
  }

  return (
    <>
      <h1 aria-label="Fun With AI">Fun with AI</h1>
      <a id="skip-nav" className="screenreader-text" href="#main-content">
        Skip Navigation or Skip to Content
      </a>
      <form
        style={{
          maxWidth: "100%",
        }}
        className="d-flex flex-column"
        data-testid="prompt-form"
        onSubmit={handleSubmit}
        role="form"
        aria-label="Form"
      >
        <label htmlFor="engine" aria-label="listbox">
          Select an AI Engine{" "}
        </label>
        <select
          defaultValue={formData.engine}
          onChange={handleChangeInput}
          name="engine"
          style={{
            width: "200px",
          }}
        >
          <option value="text-davinci-002">text-davinci-002</option>
          <option value="text-curie-001">text-curie-001</option>
          <option value="text-babbage-001">text-babbage-001</option>
          <option value="text-ada-001">text-ada-001</option>
        </select>
        <label htmlFor="textarea">Enter your Prompt</label>
        <textarea
          onChange={handleChangeTextArea}
          rows="10"
          value={formData.textarea}
          name="textarea"
          id="main-content"
          role="main"
          aria-label="Text Area"
        ></textarea>
        <button
          style={{
            margin: "0 auto",
            marginRight: "0px",
            maxWidth: "80px",
            backgroundColor: "#0043C8",
          }}
          className="btn btn-primary"
          role="button"
          aria-label="Submit Prompt Button to OpenAI API"
        >
          Submit
        </button>
      </form>
      {responseContent}
    </>
  );
};

export default PromptForm;
