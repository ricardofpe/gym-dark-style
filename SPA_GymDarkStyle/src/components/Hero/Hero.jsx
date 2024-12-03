import React from "react";
import handIcon from "../../assets/Frontend_Assets/hand_icon.png";
import arrowIcon from "../../assets/Frontend_Assets/arrow.png";
import heroImage from "../../assets/Frontend_Assets/oversized-style.png";
import {
  ContainerHandIcon,
  ContainerHero,
  ContainerHeroButton,
  HeroLeft,
  HeroRight,
} from "./HeroStyled";

export default function Hero() {
  return (
    <ContainerHero>
      <HeroLeft>
        {" "}
        <h2>NEEW ARRIVALS ONLY</h2>
        <div>
          <ContainerHandIcon>
            <p>new</p>
            <img src={handIcon} alt="" />
          </ContainerHandIcon>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <ContainerHeroButton>
          <div>Latest Collection</div>
          <img src={arrowIcon} alt="" />
        </ContainerHeroButton>
      </HeroLeft>
      <HeroRight>
        <img src={heroImage} alt="" />
      </HeroRight>
    </ContainerHero>
  );
}
