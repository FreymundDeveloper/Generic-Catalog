# Generic-Catalog

Generic Catalog is a search application that simulates a sports store page.

Some technologies used:

* React;
* Html;
* CSS(Styled);
* JavaScript;
* Jest;
* Node;
* Express.

## Questions

All answers to questions(1 to 6) are found in ".txt" or ".js" files within "./challenge/".

## Routes

The route is linked to the address "localhost:3001/products ...". The backend runs on port 3001 and the frontend on port 3000. Below is a specification of the route's QueryParms.

* Get: /results - QueryParms: { types, sellers, sports, availableSizes, price, name };

## Running the app

**Obs 1**: Make sure the Backend is running before starting the Frontend, otherwise bugs may occur;
**Obs 2**: Front-end tests return console errors, related to route calls. However, they do not affect the integrity of the tests (they are just basic rendering tests);
**Obs 3**: Don't forget to install dependencies, both backend and frontend.

```bash
# Installation
# Go to "cd ./frontend" and in "cd ./backend". Then run:
$ npm install

# Running
# Open two terminals and go to "cd ./frontend" in one, and "cd ./backend" in the other. Then run on both:
$ npm start

# Running Test
# Go to "cd ./frontend" or in "cd ./backend". Then run:
$ npm run test
```