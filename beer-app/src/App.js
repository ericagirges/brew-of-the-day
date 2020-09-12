import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBeer } from "./store/actions/beerOfTheDayActions"
import "./App.css";
import BeerOfTheDay from "./components/BeerOfTheDay";
// styling imports
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import AppCarousel from "./components/AppCarousel";
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

const NewsletterSignUp = styled.div `
  font-family: "Raleway", sans-serif;
  width: 100%;
  color: white;
  padding-top: 30px;
  padding-bottom: 40px;

  h4 {
    font-weight: 500;
    font-size: 2.0rem;
    text-align: left;
    color: #FE620C;
    margin-left: 10px;
  }
`;

const NewsletterText = styled.p `
  text-align: left;
  margin-top: 20px;
  font-size: 1.1rem;
  margin-left: 15px;
  width: 80%;
  line-height:1.7;

`

const NewsletterButton = styled.button `
  border: none;
  background: none;
  font-family: "Raleway", sans-serif;
  font-size: 1.1rem;
  color: #FE620C;
  text-transform: uppercase;
  margin-top: 20px;
  border-bottom: 1px solid #FE620C;
`

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
      <AppCarousel />
      <NewsletterSignUp>
        <h4>
          Join our newsletter!
        </h4>
        <NewsletterText>Don't miss out on the latest and greatest. Keep up to date on all new craft beer. Get daily beer suggestions emailed right to you!</NewsletterText>
        <NewsletterButton>Sign up</NewsletterButton>
      </NewsletterSignUp>
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
