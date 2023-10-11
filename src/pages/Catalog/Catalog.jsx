import  {useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/selectors";


import { CatalogPage } from "../OldCatalog/OldCatalog.styled";

import defaultImg from "../../assets/images/tractor.jpg";
import heart from "../../assets/svg/heart.svg";

import Loader from "../../components/Loader/Loader";

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
} from "../../components/AdvertisementCard/AdvertisementCard.styled";
import Button from "../../components/Button/Button";
import { fetchCars,fetchCarsByPage } from "../../redux/operations";

export default function Catalog() {
  const { items, isLoading, error } = useSelector(getCars);
  const [page, setPage] = useState(1);
    const dispatch = useDispatch();


   useEffect(() => {
     dispatch(fetchCars());
   }, [dispatch]);
  
 useEffect(() => {
   dispatch(fetchCarsByPage(page));
  
 }, [dispatch, page]);
  
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (isLoading) {
    return   <Loader />;
  }

  if (error) {
    return "Error" + error;
  }

 

  return (
    <div>
      <CatalogPage>
        {items.map(
            ({
              id,
              img = defaultImg,
              make,
              model,
              year,
              rentalPrice,
              address,
              rentalCompany,
              type,
              mileage,
              functionalities,
            }) => {
              return (
                <Card key={`item-${id}`}>
                  <ImgContaiter>
                    <Heart src={heart} alt="heart" />
                    <Image src={img} alt={make}></Image>
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
                    <Info>{address ? address.split(",")[1] : ""}</Info>

                    <Info>{address ? address.split(", ").slice(-1) : ""}</Info>
                    <Info>{rentalCompany}</Info>
                    <InfoLast>Premium</InfoLast>
                  </SecondLine>
                  <SecondLine>
                    <Info>{type}</Info>
                    <Info>{model}</Info>
                    <Info>{mileage}</Info>
                    <InfoLast>
                      {functionalities
                        ? functionalities[0].split(" ").slice(0, 3).join(" ")
                        : ""}
                    </InfoLast>
                  </SecondLine>
                  <ButtonLearnMore type="button">Learn more</ButtonLearnMore>
                </Card>
              );
            }
          )}
      </CatalogPage>
      
        <Button onClick={handleLoadMore}>Load more</Button>
      
      {/* <Button /> */}
    </div>
  );
}

