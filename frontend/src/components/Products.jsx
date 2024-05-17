import React, { useState, useEffect } from "react";
import Product from "./Product";
import { SimpleGrid } from "@chakra-ui/react";

export default function Products() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/items/")
      .then((response) => response.json())
      .then((data) => {
        setItems(data.items);
        setLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {items.map((item) => (
          <Product key={item.item_id} item={item} />
        ))}
      </SimpleGrid>
    </div>
  );
}
