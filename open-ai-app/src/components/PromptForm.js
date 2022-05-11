import React, { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import Response from "./Response";
const PromptForm = () => {
  const [formData, setFormData] = useState();
  const [responses, setResponses] = useState([]);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = {
        id: uuid(),
        prompt: formData,
      };
      const {
        data: { prompt, response },
      } = await axios.post("http://localhost:8001/create_completion", data);

      setResponses((prevResponses) => [
        ...prevResponses,
        { id: uuid(), response: response, prompt: prompt },
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
        <ul>
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
          maxWidth: "80%",
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
