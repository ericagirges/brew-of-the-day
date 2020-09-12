import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselContainer = styled.div`
  width: 100%;
  position: relative;
`;

const CarouselImages = styled.img`
  width: 100%;
  height: 40vh;
  filter: brightness(30%);
`;

const OverlayLink = styled.div`
  position: absolute;
  top: 50%;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 1;
  transition: .3s ease;
  
    button {
        background: none;
        font-family: "Raleway", sans-serif;
        text-transform: uppercase;
        color: #FE620C;
        border: none;
        font-weight: 700;
        font-size: 2.0em;
    }

    button:hover {
        color: white,
    }

`;

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"}}
        onClick={onClick}
      />
    );
  }

export default class AppCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 3500,
      autoplaySpeed: 3500,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <CarouselContainer>
        <Slider {...settings}>
          <div>
            <CarouselImages
              src="/beer-carousel-1.jpg"
              alt="craft beer glass bottles lined up"
            />
          </div>
          <div>
            <CarouselImages
              src="/beer-carousel-5.jpg"
              alt="man's arms pouring beer from tap into glass"
            />
          </div>
          <div>
            <CarouselImages
              src="/beer-carousel-2.jpg"
              alt="hands holding glasses of beer to cheers"
            />
          </div>
          <div>
            <CarouselImages
              src="/beer-carousel-3.jpg"
              alt="wall displaying various bottles/cans of beers"
            />
          </div>
          <div>
            <CarouselImages
              src="/beer-carousel-4.jpg"
              alt="two hands holding glass bottle of beer to cheers with sunset in the background"
            />
          </div>
          <div>
            <CarouselImages
              src="/beer-carousel-5.jpg"
              alt="woman pouring beer into glass from tap"
            />
          </div>
        </Slider>
        <OverlayLink class="overlay">
          <button>View entire Beer Catalog</button>
        </OverlayLink>
      </CarouselContainer>
    );
  }
}
