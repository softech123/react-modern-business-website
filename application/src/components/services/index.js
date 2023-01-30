import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements";
import Icon1 from "../../images/pexels-photo-969373.jpeg"
import Icon2 from "../../images/pexels-photo-1619801.webp"
import Icon3 from "../../images/pexels-photo-1620760.webp"
import Buttonb from "../Button1";
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Kids</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Trousers</ServicesH2>
          <Buttonb/>
          <ServicesP>
           
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Jeans</ServicesH2>
          <Buttonb/>
          <ServicesP>
          
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />

          <ServicesH2>Sneakers</ServicesH2>
          <Buttonb/>
          <ServicesP>
           
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
