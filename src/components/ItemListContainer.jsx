import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

/*import { products } from "../data/products";*/
import { ItemList } from "../components/ItemList";
import { UnderConstruction } from "../components/UnderConstruction";

import products from "../data/products.json";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const mypromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 100);
    });

    mypromise
      .then((response) => {
        if (!id) {
          setItems(response);
        } else {
          const filterByCategory = response.filter(
            (item) => item.category === id
          );
          setItems(filterByCategory);
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <Container className="mt-4">
        <h1>{props.greeting ? props.greeting : ""}</h1>
        {items.length > 0 ? <ItemList items={items} /> : <>Esperando...</>}
      </Container>
    </>
  );
};
