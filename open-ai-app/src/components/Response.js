import React from "react";

const Response = ({ prompt, response }) => {
  return (
    <li style={{ fontWeight: "bold" }} className="bg-light text-dark">
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
