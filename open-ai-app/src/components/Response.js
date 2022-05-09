import React from "react";

const Response = ({ prompt, response }) => {
  return (
    <li data-testid="response">
      Prompt: {prompt}
      Response:{response}
    </li>
  );
};

export default Response;
