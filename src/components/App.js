import React, { useReducer, useEffect } from "react";
import "../App.css";

import Header from "./Header";
import Book from "./Book";
import spinner from "../assets/ajax-loader.gif";
import Search from "./Search";
import { initialState, reducer } from "../store/reducer";
/*import axios from "axios";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";*/
import * as contentful from "contentful";

const config = {
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_APIKEY
}

const client = contentful.createClient(config);

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    /*axios.get(MOVIE_API_URL).then(jsonResponse => {
      dispatch({
        type: "SEARCH_BOOKS_SUCCESS",
        payload: jsonResponse.data.Search
      });
    });*/

    //HTTP call - https://cdn.contentful.com/spaces/{space}/entries?access_token={accessToken}&content_type=book&fields.title[match]=code&select=sys.id,fields
    client.getEntries({
        limit: 20,
        order: 'sys.createdAt',
        content_type: 'book'
    }).then(entries => {
        dispatch({
            type: "SEARCH_BOOKS_SUCCESS",
            payload: entries.items
        });
    });
  }, []);

  // you can add this to the onClick listener of the Header component
  /*const refreshPage = () => {
    window.location.reload();
  };*/

  const search = searchValue => {
    dispatch({
      type: "SEARCH_BOOKS_REQUEST"
    });

    /*axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`).then(
      jsonResponse => {
        if (jsonResponse.data.Response === "True") {
          dispatch({
            type: "SEARCH_BOOKS_SUCCESS",
            payload: jsonResponse.data.Search
          });
        } else {
          dispatch({
            type: "SEARCH_BOOKS_FAILURE",
            error: jsonResponse.data.Error
          });
        }
      }
    );*/

    client.getEntries({
        limit: 20,
        order: 'sys.createdAt',
        content_type: 'book',
        query: searchValue
    }).then(entries => {
        dispatch({
            type: "SEARCH_BOOKS_SUCCESS",
            payload: entries.items
        });
    });
  };

  const { books, errorMessage, loading } = state;

  const retrievedBooks =
    loading && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : books.length > 0 ? (
      books.map((book, index) => (
        <Book key={`${index}-${book.fields.title}`} book={book} />
      )))
      : (<div className="errorMessage">No Books found</div>);

  return (
    <div className="App">
      <div className="m-container">
        <Header text="BOOK FINDER" />

        <Search search={search} />

        <p className="App-intro">Sharing a few of our favourite books</p>

        <div className="books">{retrievedBooks}</div>
      </div>
    </div>
  );
};

export default App;
