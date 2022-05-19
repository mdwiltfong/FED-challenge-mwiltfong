# Front End Developer Intern Challenge

## Quick Description:

Hey there! This is integration app for the OpenAI API. You can find the live site here: `https://openai-app-mw.herokuapp.com/` This app simply sends prompts to OpenAI's `completions` end point. In addition, it allows the client to select which engine to choose as well as stores the returned responses on their local browser. This app uses the following technologies:

- React
- Express
- Bootstrap
- Mock Service Worker (MSW)
- React Test Library

In addition, this was build with Test Driven Development in mind, meaning that all the functions and features were first developed by writing their respective tests. This app was also developed with accessibility in mind. Below you can find instructions on how to run the app locally on your machine.

If you're interested in seeing what else I have been developing lately, check out at `https://teacher-pay.herokuapp.com/` or `https://github.com/mdwiltfong/capstone_one`

## How to run locally on your machine

- Download/clone the repo onto your machine
- Make sure PORT 3000 is available on your machine. I like to use `npx kill-port 3000` to verify this.
- From the root directory run `npm run server` This will render the client code in your browser.

## Demo Guide

There are several features of this app that make it unique. This section will provide a guide on how to interact with these features.

# Accessibility

Upon loading the page, you can access a "Skip Link" by pressing tab. Then by pressing enter, the browser will focus on the text area. "Skip Links" are commonly used for the visually impaired. I had also used the website `accessibilitychecker.org` to also veryify and evaluate the accessibility of the website. So there will be several `aria-labels` in the code itself to help screen readers.

# Selecting an AI Engine

The app supports sending several prompts to a variety of AI engines that are hosted on OpenAI. You can select any engine in the drop down box. Text-curie-001 is the default. Each AI specializes in certain tasks. You can best see this by sending a prompt "Write a poem" to text-curie-001 and comparing it's response to text-babbage-001.

# Send a prompt

You can send a prompt to the AI by first writting it in the textarea, and then clicking submit. After a small pause, the response of the API will render under "Responses" with your original prompt and the response from the AI.
