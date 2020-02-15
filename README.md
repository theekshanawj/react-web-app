# react-web-app

This repo contains boilerplate code for a React application with Node/Express serving the React App.

## Content

1. React Application with simple routes
2. Express application serving the HTML content 
3. Webpack/Babel configurations to bundle React app


## How to use this Repo 

Content is sliced using commits 

### Commit-1 

The basic Node/Express app. 

#### Hightlights 

1. Node app created with `npm init`
2. Added expressed using `npm i express`
3. Created `/public` folder with a sample `index.html` file
4. Added `index.js` file that serves content in the `public` folder
5. Added a script to start the Node app

#### Output

Run `npm run start` in the root directory and use your favourite browser to navigate to `localhost:3000/` to see *Hello World* page

### Commit-2

The basic React application

#### Highlights

1. Added React dependencies with `npm i react react-dom react-router-dom`
2. Created `app.js` to that contains the basic React app

#### Output

N/A

### Commit-3

Adding Webpack and Babel to transpile and bundle the React application into `bundle.js` in `/public` folder. 

#### Highlights

1. Added Webpack and Babel dev dependencies `npm i --save-dev webpack webpack-cli @babel/core @babel/preset-env \@babel/preset-react babel-loader`
2. Added `webpack.config.js` file to bundle the `app.js` React app into `bundle.js` in `/public`
3. Added `.babelrc`
4. Added a `div` and `script` in `index.html` to integrate the React into the served `html` file

#### Output

Run `npm run start` and navigate to `localhost:3000/` to see Content in the React application in the *Hello World* app


### Commit-4

Define simple routes in the React application and allow dynamic routing thorugh Express

#### Highlights

1. Defined basic routing using `BrowserRouter, Switch and Route` in `react-router-dom`
2. Defined `get(*)` in Express server to allow dynamics routes

#### Output

Run `npm run start` and navigate to `localhost:3000/` to see Content in the React application that allows navigations to `/` `/discover` and `/dashboard` routes

