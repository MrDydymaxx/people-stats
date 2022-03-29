# People stats

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the app.

Use node v16 use :

```bash
nvm install 16
```

or :

```bash
nvm use 16
```

in case you already have node 16

```bash
npm i
```

## Usage

Start the application dev with :

```bash
npm run start
```

Run the build for production with :

```bash
npm run dist
```

Analyse the coding rules with :

```bash
npm run lint
```

## Routes

- `/login` : Login page
- `/` : Home page containing the dashboard (You have to login first)
- `/search` : Search and filter for all of the users in the database
- `/search/:username` : Check the informations of one particular user

**In case of another route being used, a 404 page is displayed**
