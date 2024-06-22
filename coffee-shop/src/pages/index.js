import { useState, useEffect } from "react";

export default function Home() {

  const [menu, setMenu] = useState([]);

  useEffect(async () => {
    async function loadData() {
      const res = await fetch("/api/menu");
      const data = await res.json();
      setMenu(data.menu);
    }
    loadData();
  }, [])
  
  if (menu.length === 0) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Welcome to Coffee Shop</h1>
      <h4>Here is our menu</h4>
      {menu.map[(item) => {
        return (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        )
      }]}
    </>
  );
}