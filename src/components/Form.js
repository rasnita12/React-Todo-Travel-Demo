import { useState } from "react";
export default function Form({ onAddItems }) {
  const [desc, setDesc] = useState("");
  const [qty, setQty] = useState(1);

  function handleFormSubmission(e) {
    e.preventDefault();
    if (!desc) return;

    const newItem = {
      desc,
      qty,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);

    setDesc("");
    setQty(1);
  }
  return (
    <form className="add-form" onSubmit={handleFormSubmission}>
      <h3>What do you need for your trip ?</h3>
      <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
        {/* <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option> */}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
