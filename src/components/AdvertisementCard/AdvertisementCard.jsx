// import React from 'react'

import defaultImg from "../../assets/images/tractor.jpg";

import PropTypes from "prop-types";
import heart from "../../assets/svg/heart.svg";
// import  favoriteHeart from "../../assets/svg/heart-favorite.svg";

import {
  Card,
  Image,
  Header,
  Model,
  Info,
  MainLine,
  MainInfo,
  SecondLine,
  ButtonLearnMore,
  InfoLast,
  Heart,
  ImgContaiter,
} from "./AdvertisementCard.styled";

export default function AdvertisementCard({
  img = defaultImg,
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  id,
  functionalities,
}) {
  return (
    <Card>
      <ImgContaiter>
        <Heart src={heart} alt="heart" />
        <Image src={img || defaultImg} alt={make} />
      </ImgContaiter>

      <MainLine>
        <MainInfo>
          <Header>{make}</Header>
          <Model>{model}</Model>
          <span>,</span>
          <Header>{year}</Header>
        </MainInfo>

        <Header>{rentalPrice}</Header>
      </MainLine>
      <SecondLine>
        <Info>{address.split(", ")[1]}</Info>
        <Info>{address.split(", ").slice(-1)}</Info>
        <Info>{rentalCompany}</Info>
        <InfoLast>Premium</InfoLast>
      </SecondLine>
      <SecondLine>
        <Info>{type}</Info>
        <Info>{model}</Info>
        <Info>{id}</Info>
        <InfoLast>
          {functionalities[0].split(" ").slice(0, 3).join(" ")}
        </InfoLast>
      </SecondLine>
      <ButtonLearnMore type="button">Learn more</ButtonLearnMore>
    </Card>
  );
}

AdvertisementCard.propTypes = {
  img: PropTypes.string,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rentalPrice: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  rentalCompany: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
};
