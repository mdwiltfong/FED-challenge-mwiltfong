import React from "react";

const Response = ({ prompt, response }) => {
  return (
    <li>
      <div className="container">
        <div className="row">
          <div className="col">Prompt:</div>
          <div data-testid="prompt" className="col">
            {prompt}
          </div>
        </div>
        <div className="row">
          <div className="col">Response</div>
          <div data-testid="response" className="col">
            {response}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Response;
