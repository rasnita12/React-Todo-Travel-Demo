import { useState } from "react";
import Logo from './Logo';
import Form from './Form';
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, desc: "Passports", quantity: 2, packed: false },
  { id: 2, desc: "Socks", quantity: 12, packed: false },
  { id: 3, desc: "Medicines", quantity: 5, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems); //new state items lai packing list ma pathauna namileko karandle
  
  function handleAddItems(item)
  {
    setItems(i => [...items, item])
  }

  function handleDeleteItems(id)
  {
    setItems(i => i.filter(data => data.id !== id))
  }

  function handleToggleItems(id)
  {
    setItems(i => i.map(data => data.id === id ? {...data, packed:!data.packed} : data))
    
    // setItems(i => i.map(data => data.id === id ? {...data,packed:!data.packed} : data))
  }

  function handleClearList()
  {
    const confirmed = window.confirm('Are you sure you want to delete all items?');
    if(confirmed)
      setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItems} onToggleItem={handleToggleItems} onClearList={handleClearList}/>
      <Stats items={items} />
    </div>
  );
}






