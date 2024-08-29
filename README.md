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

- I didn't use the boilerplate startup template, because there were errors with outdated Eslint configurations. Creating a new default startup Vue project was easier.
- Styled for 2 screens. Mobile (<1024px) and Desktop (>=1024px).
- I wrote a few unit tests. I started on writing unit tests for the /src/app directory, but that required me to mock axios and at that point I already crossed the time limit, so I decided to leave that as it was, with no tests.

