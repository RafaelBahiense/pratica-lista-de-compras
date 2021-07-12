import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import InsertForm from "./InsertForm";

export default function ShoppingList() {
  // Fake data
  const [items, setItems] = useState([
    { id: 1, text: "Loading" }
  ]);

  useEffect(loadItems, []);

  async function loadItems() {
    const response = await axios.get("http://localhost:4000/api/items");
    setItems(response.data);
  }

  return (
    <>
      <InsertForm onAddItem={loadItems} />
      <List>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </List>
    </>
  );
}

const List = styled.ul`
  margin-top: 40px;
  background: #fff;
  width: 600px;
  padding: 20px;
  border-radius: 10px;
  font-size: 25px;
  padding-left: 50px;
  line-height: 40px;
  list-style-type: disc;
`;
