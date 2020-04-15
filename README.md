# Introduction

This is a repository of a collection of coding exercises from the Udemy React-Redux course which can be found here:
https://www.udemy.com/course/react-redux/learn/lecture/12531304#overview

---

## Table of Contents

- [Installation](#installation)
- [Projects](#projects)
  - [Seasons](#seasons)
  - [Image Gallery with Search](#image-gallery-with-search)
- [Other Available Scripts](#other-available-scripts)

---

## Installation

Clone the repository

```bash
git clone git@github.com:amytangcodes/udemy-react-app.git
```

Install Dependencies

```bash
npm install
```

In the project directory, you can run:

```bash
yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

---

## Projects

All project stylings we use Semantic-UI.

### Seasons

We grab the user's physical location using the Geolocation API to determine whether to show the warm or cold weather component. We also handle loading through a Spinner component.

### Image Gallery with Search

In this project, we learn about handling user inputs with forms and events. We use Axios to connect to the Unsplash image API and learn about Async Await. We also use Grid CSS and Ref's for DOM access to create the gallery of images.

---

## Other Available Scripts

```bash
yarn test
```

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```bash
yarn build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```bash
yarn eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
