
# eslint-config-o2team [![Build Status](https://travis-ci.org/o2team/eslint-config-o2team.svg?branch=master)](https://travis-ci.org/o2team/eslint-config-o2team)

> ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the O2Team Javascript Style Guide


## Installation

```
$ npm install --save-dev eslint eslint-config-o2team
```


## Usage

### eslint-config-o2team

Once the `eslint-config-o2team` package is installed, you can use it by specifying `o2team` in the `extends` section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "o2team",
  "rules": {
    // Additional, per-project rules...
  }
}
```

Or you can specifying `eslint-config-o2team` in the `eslintConfig` section of your `package.json`

```json
{
  "eslintConfig": {
    "extends": "eslint-config-o2team"
  }
}
```

### eslint-config-o2team/legacy

Maybe some legacy projects use `ES5` and below.

```js
{
  "extends": "o2team/legacy",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## [License](LICENSE)
