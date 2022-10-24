
## Create typescript project with create-next-app using --ts
    npx create-next-app@latest --ts my-portfolio
    # or
    yarn create next-app --typescript
    # or
    pnpm create next-app --ts
    npm install --global yarn

## Exisiting projects: To get started in an exisiting project, create an empty tsconfig.json file in the root folder:
    touch tsconfig.json

## To install tailwindcss: follow the steps from website-Docs-Using PostCSS or
    vscode terminal -> 
    yarn add -D tailwindcss postcss autoprefixer 
    # or
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init  (To create a file in vscode of tailwind.config.js)
    npx tailwindcss init -p  (To create postcs.config.js)
    Copy the content and paste in tailwind.config.js file

## To install social icon libraries
    npm install react-social-icons
    # or
    yarn add react-social-icons

## For animation I have used Framer motion
    To install Framer motion
    npm install framer-motion
    # or yarn add framer-motion
    How to use framer motion just add motion. before 

## To install react simple typewriter
    npm i react-simple-typewriter
    # or 
    yarn add react-simple-typewriter

## For ContactMe section icons
    To install icons 
    npm install @heroicons/react
    # or
    yarn add @heroicons/react

## To connect ContactMe form to data using Typescript
    npm install react-hook-form
    # or yarn add react-hook-form

### If you get some errors while installing
    npm cache clean --force

## For installing scrollbar
    npm install -D tailwind-scrollbar
    # or 
    npm install --save-dev tailwind-scrollbar
### Unhandled runtime error:
    Can't put <ul> <li> inside paragraph ex: <p><ul><li></li></ul></p>