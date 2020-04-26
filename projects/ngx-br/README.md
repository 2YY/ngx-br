# NgxBr

![CI](https://github.com/2YY/ngx-br/workflows/CI/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/864dcdff5e2b8f2f409c/maintainability)](https://codeclimate.com/github/2YY/ngx-br/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/864dcdff5e2b8f2f409c/test_coverage)](https://codeclimate.com/github/2YY/ngx-br/test_coverage)

## Usage

In your component:

`message = 'hoge\nfuga';`

then, in your template:

`<p [innerHTML]="message | ngxBr"></p>`

should be:

`<p>hoge<br>fuga</p>`
