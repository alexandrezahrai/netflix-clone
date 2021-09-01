import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action & Adventure" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Crime" fetchUrl={requests.fetchCrimeMovies} />
      <Row title="Sci-Fi" fetchUrl={requests.fetchScienceFictionMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
