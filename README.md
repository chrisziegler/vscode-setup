## ESLint | Prettier setup one time setup

#### I compiled this instruction set from various documentation as a simplified means to quickly set-up something that works in VSCode. **_- CZ_**

Customize AirBnB's styles to teams platform and code needs. No further configuration required.

    1. Install eslint-config-airbnb-base and eslint-plugin-import to devDependencies
    2. Install ESLint extension for VS Code (so it works with our code editor)
    3. Make sure it's enabled in VS Code's user settings: 	 `"eslint-enable": true,`
      Add .eslintrc.js config file (which with this extension is exported: module.exports)
    4. Install Prettier as a global package (could aslo add it to devDependencies locally), and alone with the ESLint package include instructions to install extension in  Github repo)
    5. Install Prettier's VS Code extension (Necessary to get Prettier to work in our editor)
    6. Make it play nice with ESLint in VS Code's user settings (haven't even added it to our config file yet)	 "prettier.eslintIntegration": true
    7. Customize AirBnB's rules to fit your dev environment and preferences.

Can also add npm init coding directory to add dependencies (and eslint config) there -- as opposed to individual project directories, for automatic linting and formatting for all projects. Recommend using on a per-project basis for anywhere code distribution from a repo.
