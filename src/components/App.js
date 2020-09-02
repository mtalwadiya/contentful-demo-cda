import React, { useState } from "react";
import "../App.css";

import Header from "./Header";
import Library from "./Library";
import Search from "./Search";

const App = () => {
  const [query, setQuery] = useState("");

  const search = searchValue => {
    setQuery(searchValue)
  };


  return (
    <div className="App">
      <div className="m-container">
        <Header text="BOOK FINDER" />

        <Search search={search} />

        <p className="App-intro">Sharing a few of our favourite books</p>

        <Library query={query}/>
      </div>
    </div>
  );
};

export default App;
