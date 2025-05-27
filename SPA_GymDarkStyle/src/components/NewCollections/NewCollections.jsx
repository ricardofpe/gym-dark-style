import { Collections, ContainerNewCollections } from "./NewCollectionsStyled";
import new_collection from "../../assets/Frontend_Assets/new_collections";
import Item from "../Item/Item";

export default function NewCollections() {
  return (
    <ContainerNewCollections>
      <h1>NEW COLLECTIONS</h1>
      <hr />

      <Collections>
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </Collections>
    </ContainerNewCollections>
  );
}
