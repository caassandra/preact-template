# Preact + Typescript + Yarn Berry

This is my personal starter template for using preact with Yarn 2 & Typescript

## Documentation

- This is a modified version of the Typescript template for
  [preact-cli](https://github.com/developit/preact-cli).
- [For Preact](https://preactjs.com/): General information about how to work
  with Preact, not specific to this template

## Usage

```bash
$ yarn global add preact-cli
$ preact create caassandra/preact-template my-project --yarn
$ cd my-project
$ yarn dev
```

Development server runs on port `8080`. If the default port is already in use on
your machine it will start the development server on a random port.

## Commands

- `yarn`: Installs dependencies

- `yarn dev`: Run a development, HMR server

- `yarn serve`: Run a production-like server -- use in conjunction with `yarn build` (i.e. `yarn build && yarn serve`)

- `yarn build`: Production-ready build

- `yarn lint`: Pass TypeScript files using ESLint

- `yarn test`: Run Jest and Enzyme with
  [`enzyme-adapter-preact-pure`](https://github.com/preactjs/enzyme-adapter-preact-pure) for
  your tests

## Configuration

This template is setup for usage with VS Code. That's the editor I use, so that's what I configured it for.
