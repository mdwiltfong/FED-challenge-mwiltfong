import React from "react";
/* This component will render the responses from OpenAI */
const Response = ({ prompt, response }) => {
  return (
    <li
      style={{
        fontWeight: "bold",
        margin: "20px 0px",
        backgroundColor: "#EEEEEE",
      }}
      className="bg-light text-dark"
    >
      <div className="container">
        <div className="row">
          <div className="col-3 text-dark">Prompt:</div>
          <div data-testid="prompt" className="col text-dark">
            {prompt}
          </div>
        </div>
        <div className="row">
          <div className="col-3 text-dark">Response:</div>
          <div data-testid="response" className="col text-dark">
            {response}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Response;
