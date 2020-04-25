# NgxBr

![CI](https://github.com/2YY/ngx-br/workflows/CI/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/864dcdff5e2b8f2f409c/maintainability)](https://codeclimate.com/github/2YY/ngx-br/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/864dcdff5e2b8f2f409c/test_coverage)](https://codeclimate.com/github/2YY/ngx-br/test_coverage)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Usage

In your component:

`message = 'hoge\nfuga';`

then, in your template:

`<p [innerHTML]="message | libNgxBr"></p>`

should be:

`<p>hoge<br>fuga</p>`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
