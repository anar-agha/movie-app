//Created by [rce] snippet.
import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import MoviePage from "./components/pages/MoviePage";
import { Container } from "semantic-ui-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewMoviePage from "./components/pages/NewMoviePage";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container text>
          Hello world!
          <br />
          <Route exact path="/movies" component={MoviePage}></Route>
          <Route exact path="/movies/new" component={NewMoviePage}></Route>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
