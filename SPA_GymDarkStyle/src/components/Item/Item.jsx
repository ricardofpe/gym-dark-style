import React from "react";
import {
  ContainerItem,
  ContainerItemPriceNew,
  ContainerOldPrice,
  ContainerPrices,
} from "./ItemStyled";

export default function Item(props) {
  return (
    <ContainerItem>
      <img src={props.image} alt="" />
      <p>{props.name}</p>

      <ContainerPrices>
        <ContainerItemPriceNew>${props.new_price}</ContainerItemPriceNew>

        <ContainerOldPrice>${props.old_price}</ContainerOldPrice>
      </ContainerPrices>
    </ContainerItem>
  );
}
