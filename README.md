[![Build Status](https://travis-ci.org/willemliu/yarn-webpack1-typescript2-gulp-karma-jasmine-jquery.svg?branch=master)](https://travis-ci.org/willemliu/yarn-webpack1-typescript2-gulp-karma-jasmine-jquery)
[![Coverage Status](https://coveralls.io/repos/github/willemliu/yarn-webpack1-typescript2-gulp-karma-jasmine-jquery/badge.svg?branch=master)](https://coveralls.io/github/willemliu/yarn-webpack1-typescript2-gulp-karma-jasmine-jquery?branch=master)

# yarn-webpack1-typescript2-karma-jasmine-jquery
Using Webpack 1 to bundle TypeScript 2 files.
This project is an example on how to setup Unit Testing in a TypeScript 2 project using Karma as test runner and Jasmine as test framework.
The project code itself tries to mimic a simplistic real-life example. It does that by using Webpack 1 to bundle TypeScript 2 files and including jQuery as JavaScript library.

## Installation
Clone this project and follow these steps to get it up and running on your own computer.

1. Install [NodeJS](https://nodejs.org/en/) and NPM for your system
1. Install [Yarn](https://yarnpkg.com/) for your system (Why Yarn? Because NPM is so 2016. But seriously, read the pros on their website)
1. Install [Gulp](http://gulpjs.com/) globally: `yarn add gulp --global`
1. Install project dependecies: `yarn install`

## Run tests
You can use either `gulp test` or it's alias `yarn test` to run the karma test runner.

## Build project
You can run `gulp` to build the project. Eventually when the build completes you'll find all the necessary files in the `dist/` folder.
It's possible to serve the files in this folder as a static website. You can use a simple webserver like `http-server` for testing purposes.
For easier debugging you could also serve the `build/` folder as static website. The uncompressed JavaScripts will be served when you load the index.html from that location.
