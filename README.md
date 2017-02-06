# NgReduxSample

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.30.

I tried to show how to write an @angular application which preloads feature modules in background using lazy load with webpack.

One of the greatest point of @angular/cli is the fact that I can focus on coding my own applciation while leverage of webpack packaging/bundling features. 

## Supports AoT compilation 

As far as is based on @angular/cli this repo supports AoT compilation as well. Just take a look at documentation below.

## Supports Redux Dynamic Reducer loaders

Each module loaded on demand can import its own reducers, actions and store. The imported store will be part of the main one by the use of ReplaceReducers Redux function.


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
