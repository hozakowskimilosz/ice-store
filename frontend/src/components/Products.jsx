import React, { useState, useEffect } from "react";

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
      <h1>Products:</h1>
      <ul>
        {items.map((item) => (
          <li key={item.item_id}>
            {item.item_name} - {item.price} zł
          </li>
        ))}
      </ul>
    </div>
  );
}
