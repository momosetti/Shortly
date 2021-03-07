## Tech Stack used:

- React.js library (Next.js), Node.js, TypeScript.

- Style: Sass preprocessor.

- Package mangement: Yarn.

- Editor: Vscode (Eslint and Prettier for linting and formating).

- Source control version: GIT. (I used [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) as Commit Guidelines)
- Testing:

  - Test runner: Jest
  - Testing library: [testing-library](https://testing-library.com/)

- Transpiling; Babel

## How to run the app:

After clonging the repo, be sure that your CLI in on the root directory and fire: (Use your prefered package manger)

    yarn install

to install node modules.

For starting the server:

    yarn dev

For testing:

    yarn test

## Developing Process:

I started by crafting the UI from the given design using HTML(JSX)/SCSS, I rely on the **mobile**-**first** approach and **separation of concerns** design principle to decouple every unit into Web Component.
In the final, I used basic unit tests to check app functionality
