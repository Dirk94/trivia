# Crazy Trivia

This is a Vue 3 project that let's you play some Trivia.

## Setting up

Make sure you are on Node 20.
```bash
nvm use
```

Install dependencies.
```bash
npm i
```

To run the dev server.
```bash
npm run dev
```

To run the unit tests.
```bash
npm run test:unit
```

## Implementation choices

- I've time boxed myself, and this is the result after roughly 4 hours.
- I didn't use the boilerplate startup template. I got some outdated ESlint rules errors, so I decided to start from scratch with a default Vue 3 + Vite app.
- Styled for 2 screens. Mobile (<1024px) and Desktop (>=1024px).
- I wrote a few unit tests. I started on writing unit tests for the `/src/app` directory, but that required me to mock axios and at that point I already crossed the time limit, so I decided to leave that as it was, with no tests.
  - If this was a real life application I would test the main features with a few Cypress end-to-end tests.
- Because of time constraints I've decided to "trust" the Trivia API HTML generated output. This is a XSS vulnerability, and should probably not be deployed in a real-life application. 
