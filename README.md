# Corny Uni-corn

Project of a unicorn adoption website for [Toronto JS](https://torontojs.com) Code club event.

## Requirements

1. [`Node.js`](https://nodejs.org/en/) - `v20.9.0` or higher
2. [`NPM`](https://www.npmjs.com/) - `v10.0.1` or higher

## _(Optional)_ Install `node` through `volta`

1. Install [`volta`](https://volta.sh/)
2. Run `volta install node@20`

## Installation

1. Clone the repo
2. Run `npm install`
3. Run `npm start`

## TODO for Code Club

### Dev tools already installed

1. [`volta`](https://volta.sh/) - for managing node versions
1. [`eslint`](https://eslint.org/) - `npm` package: `eslint`
1. [`typescript`](https://www.typescriptlang.org/) - `npm` package: `typescript`

### Dependencies already installed

1. [`sqlite`](https://www.sqlite.org/index.html) - `npm` package: [`sqlite3`](https://www.npmjs.com/package/sqlite3)
2. [`knex`](https://knexjs.org/) - `npm` package: `knex`
3. [`hono`](https://hono.dev/) - `npm` packages: `hono`, `@hono/node-server`

### Still to do

1. Implement base server
   1. Connect `hono` to database
   2. Implement CRUD for unicorns
   3. Implement routes for appointment scheduling
2. Implement frontend
   1. Serve static files
   2. Add base html
   3. Add base CSS
   4. Add JS functionality
