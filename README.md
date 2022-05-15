# Front End Developer Intern Challenge

## Quick Description:

Hey there! This is integration app for the OpenAI API. You can find the live site here: `https://openai-app-mw.herokuapp.com/` This app simply sends prompts to OpenAI's `/create_completion` end point. In addition, it allows the client to select which engine to choose as well as stores the returned responses on their local browser. This app uses the following technologies:

- React
- Express
- Bootstrap
- Mock Service Worker (MSW)
- Jest

In addition, this was build with Test Driven Development in mind, meaning that all the functions and features were first developed by writing their respective tests. Below you can find the initial specifications of the app as well as how to run the app locally on your machine. 

If you're interested in seeing what else I have been developing lately, check out at `https://teacher-pay.herokuapp.com/` or `https://github.com/mdwiltfong/capstone_one` 

## Specifications:

- The app will send plain text prompts to the API
- The app will display the results in a list.
- The interface will include the following:
  - A form to submit the text prompts
  - Submitting the form sends the prompt to the OpenAI API
  - The Results are displayed in a list, sorted from _newest_ to _oldest_
  - Each result should contain the original prompt and a response from the API.
- Open AI's completion API must be used.
- It's recommended to use the `text-curie-001` engine.
- Any framework can be used, or none.
- The project must also be hosted on a live site.

## How to run locally on your machine

- Download/clone the repo onto your machine
- Make sure PORT 3000 is available on your machine. I like to use `npx kill-port 3000` to verify this.
- From the root directory run `npm run server` This will render the client code in your browser. 
