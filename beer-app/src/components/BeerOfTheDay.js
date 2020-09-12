import React from "react";
import styled from "styled-components";

const BeerContainer = styled.div `
    background: white;
    width: 100%;
    height: 475px;
    text-align: center;
    margin: 30px auto;
    font-family: "Raleway", sans-serif;
`

const BeerImage = styled.img `
    width: auto;
    height: 300px;
    padding-top: 30px;
`

const BeerName = styled.h2 `
    margin-top: 20px;
    font-weight: 500;
    font-size: 1.6rem;
`

const InfoLinkButton = styled.button `
    margin-top: 20px;
    background: none;
    border: none;
    border-bottom: 1px solid black;
    font-family: "Raleway", sans-serif;
    font-size: 1.0rem;
    margin-left: 70%;
    text-transform: uppercase;
`

const BeerOfTheDay = (props) => {
    console.log("BEER", props.beer)
    return(
        <BeerContainer>
            <InfoLinkButton>More info</InfoLinkButton>
            <BeerImage src={props.beer.image_url} alt="{props.beer.name}"/>
            <BeerName>{props.beer.name}</BeerName>
        </BeerContainer>
    )
}

export default BeerOfTheDay;