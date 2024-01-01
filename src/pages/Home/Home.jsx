
import { Slogan,ImageContainer } from "./Home.styled";

import bkg from '../../assets/images/bmw.webp';



export default function Home() {
  return (
    <div>
      <ImageContainer>
        <img src={bkg} alt="Background"></img>
        <Slogan>Unlock Your Journey:<br></br> Rent the Freedom of the Road!</Slogan>
      </ImageContainer>
    </div>
  );
}
