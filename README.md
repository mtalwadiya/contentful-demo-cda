# Book Finder App
This is a demo application using React and [Contentful](https://www.contentful.com/) headless CMS. 

It uses Contentful CDA (content delivery API) [JS SDK](https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/) for fetching content. It fetches Content-Type "Book" having following fields - title, author, image, description. 

It also demostrates use of [React hooks](https://reactjs.org/docs/hooks-overview.html) - `useState, useReducer, useEffect`. 

![](screenshot.jpg) 

This project uses [hooks-movie-app](https://github.com/samie820/hooks-movie-app) repository as the base code. 

# Run Locally
To get the project running, clone this repository and follow these steps:

- Install all the project's dependencies:
```
yarn or npm install
```
- Enter the values in `.env` file for below variables: 
```
REACT_APP_CONTENTFUL_SPACE
REACT_APP_CONTENTFUL_APIKEY
```
- Once that's done, run the project:
```
npm start or yarn start
```
- Access the app at: 
```
http://locahost:3000
```
