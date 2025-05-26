import { ContainerOffers, OffersLeft, OffersRight } from "./OffersStyled";
import exclusive_image from "../../assets/Frontend_Assets/exclusive_image.png"


export default function Offers() {
  return (
    <ContainerOffers>


    <OffersLeft>

<h1>Exclusive</h1>
<h1>Offers For You</h1>
<p>ONLY ON BEST SELLERS PRODUCTS</p>
<button>Check now</button>
    </OffersLeft>

    <OffersRight>

        <img src={exclusive_image} alt="Exclusive" />

    </OffersRight>


    </ContainerOffers>
  )
}
