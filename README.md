# Portfolio Website
## Overview
This project is a personal portfolio website created using React, Tailwind CSS, and TypeScript. It showcases my skills, projects, and contact information in an easy-to-navigate format. The contact form functionality is implemented using EmailJS, allowing visitors to send messages directly from the website.

## Technologies Used
- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for quickly building custom designs.
- **TypeScript:** A superset of JavaScript that adds static typing.
- **EmailJS:** A service for sending emails directly from client-side JavaScript.

## Features
- **Responsive Design:** The website is fully responsive, ensuring a seamless experience across devices of all sizes.
- **Project Showcase:** Displays my projects with details and links for visitors to explore.
- **Contact Form:** Allows visitors to send messages directly through the website using EmailJS.
- **Type Safety:** TypeScript ensures type safety and enhances code quality.

## Getting Started
1. **Clone the Repository:** Clone this repository to your local machine.
```
git clone https://github.com/Anmol-Gup/surya-gupta-portfolio.git
```
2. **Install Dependencies:** Navigate to the project directory and install dependencies using npm or yarn.
```
cd surya-gupta-portfolio
npm install
```
3. **Set Up EmailJS:** Sign up for an account on [EmailJS](https://www.emailjs.com/) and configure your email service. Replace the EmailJS credentials in the project with your own.

```
npm i @emailjs/browser
```
4. **Run the Development Server:** Start the development server.
```
npm run dev
```
## License
This project is licensed under the [MIT License]().

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
