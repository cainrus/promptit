# Prompt it

Simple CLI utility that reads an input value and prints it.

![Recorded usage gif](https://media.giphy.com/media/H9qqBrKPGs1hpflVUv/giphy.gif)

## Features

* No dependencies
* Cross-platform
* Supports optional prompt message
* Lightweight and efficient

## Getting Started

### Installation

You can install Prompt it via npm or yarn.

Npm:

```shell
npm install promptit --save-dev
```

Yarn:

```shell
yarn add promptit --dev
```

### Usage

Once installed, you can execute Prompt it using the following commands:

Npm:

```shell
npx promptit
```

Yarn:

```shell
yarn dlx promptit
```

### Examples

#### Prompt Messages

You can use Prompt it to prompt the user for input with a custom message. Here are a few examples:

```shell
promptit "Enter the last 4 digits of your card number (e.g., 1234-XXXX-XXXX): "
promptit "Token: "
```

#### Usage with package.json

If you want to use Prompt it within your `package.json` file, you can leverage it to ask for a schema version before making a request. Here's an example configuration:

```json
{
  "scripts": {
    "set-schema": "curl -o schema.json https:/api.corp.com/schema?version=$(promptit 'Enter the schema version: ')"
  },
  "devDependencies": {
    "promptit": "^1.0.0"
  }
}
```

With this setup, running `npm run set-schema` will prompt you to enter the schema version, and the value will be used in the `curl` command.

## Conclusion

Prompt it is a simple yet powerful CLI utility that provides an easy way to read user input and print it. It is lightweight, cross-platform, and requires no additional dependencies. With Prompt it, you can enhance your command-line interfaces and enable user interaction in your scripts and applications.