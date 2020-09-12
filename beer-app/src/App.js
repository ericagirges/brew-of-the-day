import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBeer } from "./store/actions/beerOfTheDayActions"
import "./App.css";
import BeerOfTheDay from "./components/BeerOfTheDay";

import styled from "styled-components";

const BeerImage = styled.img`
  width: 200px;
  height: auto;
  margin-top: -40px;
`;

const LogoImage = styled.img`
  margin-bottom: -20px;
  width: 300px;
  height: auto;
`;

const Subtitle = styled.p`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 2.0rem;
  padding: 0 20px;
`;

function App({ beer, fetchBeer }) {

  useEffect(() => {
    fetchBeer();
  }, [fetchBeer]);

  return (
    <div className="App">
      <header className="App-header">
        <LogoImage src="/logo-tap.png" alt="banner with text reading On Tap" />
        <BeerImage src="/beer-img.png" alt="graphic of two jugs of beers" />
        <Subtitle>
          A brewski a day keeps us feeling okay{" "}
          <span role="img" aria-label="okay hand sign emoji">
            👌
          </span>
        </Subtitle>
      </header>
      <BeerOfTheDay beer={beer} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    beer: state.beer,
    loadingBeer: state.loadingBeer,
    errorMessage: state.errorMessage,
  };
}

export default connect(mapStateToProps, { fetchBeer })(App);
