# Prompt it
Simple cli utility reads input value and prints it.
## Description
![Alt Text](https://media.giphy.com/media/H9qqBrKPGs1hpflVUv/giphy.gif)
### Features:
* no dependencies
* cross-platform
* optional prompt message
* tiny
* 
## Getting Started

### Install
Npm:
```shell
npm i promptit -D
```
Yarn:
```shell
yarn add promtit -D
```
### Executing
Npm:
```shell
npx promptit
```
Yarn:
```shell
yarn dlx promptit
```
### Examples
#### Message:
```shell
promptit Enter last 4 digits of your cart number 1234-XXXX-XXXX-
promptit "Token: " 
```
#### package.json:
Ask a developer for a scheme version before request:
```json
{
  "scripts": {
    "set-schema": "curl -o schema.json https:/api.corp.com/schema?version=$(promptit 'Version: ')"
  },
  "devDependencies": {
    "promptit": "^1.0.0"
  }
}
```