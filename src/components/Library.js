import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOKS, GET_BOOKS_ALL } from '../graphql/queries';
import Book from './Book';
import spinner from "../assets/ajax-loader.gif";


const Library = ({ query }) => {
    const { loading, error, data } = query ? 
        useQuery(GET_BOOKS, {
            variables: { term: query},
        }) : 
        useQuery(GET_BOOKS_ALL);

    const retrievedBooks =
    loading && !error ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : error ? (
      <div className="errorMessage">Error fetching books</div>
    ) : data.bookCollection.items.length > 0 ? (
      data.bookCollection.items.map((book, index) => (
        <Book key={`${index}-${book.title}`} book={book} />
      )))
      : (<div className="errorMessage">No Books found</div>);


    return (
      <div className="books">{retrievedBooks}</div>
    )
};

export default Library;