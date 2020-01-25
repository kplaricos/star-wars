# Star Wars
[![Build Status](https://travis-ci.com/kplaricos/swapi-app.svg?token=HjZHWQFqr4Mr2cqTUVaC&branch=master)](https://travis-ci.com/kplaricos/swapi-app)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Libraries used
- ngx-bootstrap: Used for styling the app, pagination and showing slides [read more here](https://valor-software.com/ngx-bootstrap/#/)
- NumeralJs: Used to format population numbers [read more here](http://numeraljs.com/)
- ngx-translate: Used for i18n browser translation (french and english). [read more here](http://www.ngx-translate.com/)

## Getting Started

Need to install project dependencies depending on your packages manager

Run `npm install` Or `yarn`

## Development server

Run `ng serve` or `npm start` or `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` or `npm run test` or `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` or `npm run e2e` or `yarn e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Continuous integration used

This project is setup to be build by [TravisCI](https://travis-ci.com/) after every deployment on Github

## Demo
You will find the working project [here](https://star-wars-b696f.firebaseapp.com/)

## Other details
You can also search or filter planets directly by adding search or page params in the browser url.
Eg: `?search=planet_name` or `?page=page_number`
