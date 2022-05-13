import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import Response from "./Response";
import retrieveStorage from "../helper_functions/retrieveStorage";
import populateStorage from "../helper_functions/populateStorage";
const hostName = window.location.hostname;
const PromptForm = () => {
  const [formData, setFormData] = useState();
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
        prompt: formData,
      };
      const {
        data: { prompt, response },
      } = await axios.post(
        "https://openai-app-mw.herokuapp.com/create_completion",
        data
      );
      populateStorage({ prompt: prompt, response: response });
      setResponses((prevResponses) => [
        { id: uuid(), response: response, prompt: prompt },
        ...prevResponses,
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setFormData(value);
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
        <textarea onChange={handleChange} rows="10" value={formData}></textarea>
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
