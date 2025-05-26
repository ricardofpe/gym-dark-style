import React from "react";
import { ContainerPopular, PopularItem } from "./PopularStyled";
import data_product from "../../assets/Frontend_Assets/data"
import Item from "../Item/Item";

export default function Popular() {
  return <ContainerPopular>
    <h1>POPULAR IN OVERSIZED</h1>
    <hr/>
    <PopularItem>
      {data_product.map((item, i) => {
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
      })}
    </PopularItem>
  </ContainerPopular>;
}
