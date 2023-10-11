import carInfo from "../../data/advertsCars.json";
import AdvertisementCard from "../../components/AdvertisementCard/AdvertisementCard";

export default function AdvertList() {
  return (
    <>
      {carInfo.map((item) => (
        <li key={item.id}>
          <AdvertisementCard
            img={item.img}
            alt={item.make}
            make={item.make}
            model={item.model}
            year={item.year}
            rentalPrice={item.rentalPrice}
            address={item.address}
            rentalCompany={item.rentalCompany}
            type={item.type}
            modele={item.model}
            id={item.id}
            functionalities={item.functionalities}
          />
        </li>
      ))}
    </>
  );
}

