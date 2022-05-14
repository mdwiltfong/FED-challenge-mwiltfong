import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import Response from "./Response";
import retrieveStorage from "../helper_functions/retrieveStorage";
import populateStorage from "../helper_functions/populateStorage";
const hostName = window.location.hostname;
const PromptForm = () => {
  const INITIAL_STATE = {
    engine: "",
    textarea: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [responses, setResponses] = useState([]);
  useEffect(() => {
    const storedResponses = retrieveStorage() || null;
    if (storedResponses) {
      setResponses(storedResponses);
    }
  }, []);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = {
        id: uuid(),
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
      populateStorage({ id: uuid(), prompt: prompt, response: response });
      setResponses((prevResponses) => [
        { id: uuid(), response: response, prompt: prompt },
        ...prevResponses,
      ]);
    } catch (error) {
      console.log(error);
    }
  };
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
  };
  let responseContent;
  if (responses.length > 0) {
    responseContent = (
      <>
        <h2>Responses</h2>
        <ul style={{ listStyle: "none", padding: "0" }}>
          {responses.map((response) => (
            <Response
              key={response.id}
              prompt={response.prompt}
              response={response.response}
            />
          ))}
        </ul>
      </>
    );
  } else {
    responseContent = (
      <>
        <h2>Responses</h2>
        <p>Submit a prompt to get a response from the Open AI API!</p>
      </>
    );
  }

  return (
    <>
      <h1>Fun with AI</h1>
      <p>Enter prompt</p>

      <form
        style={{
          maxWidth: "100%",
        }}
        className="d-flex flex-column"
        data-testid="prompt-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="engine">Select an AI Engine </label>
        <select
          value={formData.input}
          onChange={handleChangeInput}
          name="engine"
        >
          <option value="text-davinci-002">text-davinci-002</option>
          <option selected value="text-curie-001">
            text-curie-001
          </option>
          <option value="text-babbage-001">text-babbage-001</option>
          <option value="text-ada-001">text-ada-001</option>
        </select>
        <textarea
          onChange={handleChangeTextArea}
          rows="10"
          value={formData.textarea}
          name="textarea"
        ></textarea>
        <button
          style={{
            margin: "0 auto",
            marginRight: "0px",
            maxWidth: "80px",
            backgroundColor: "#0043C8",
          }}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
      {responseContent}
    </>
  );
};

export default PromptForm;
