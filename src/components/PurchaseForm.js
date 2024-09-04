import { useState } from "react";

export default function PurchaseForm({ onAddPurchaseItem, onClose }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !quantity) return;

    const newPurchaseItem = {
      name,
      quantity: Number(quantity),
      id: Date.now(),
    };

    onAddPurchaseItem(newPurchaseItem);
    setName("");
    setQuantity("");
  }

  function handleQUantityChange(e) {
    const value = parseInt(e.target.value, 10);

    if (value > 0) {
      setQuantity(value);
    } else {
      setQuantity("");
    }
  }

  return (
    <div>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="name"
          className="label"
        >
          Purchase
        </label>
        <input
          type="text"
          id="name"
          placeholder="Add item"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label
          htmlFor="pcs"
          className="label"
        >
          Quantity
        </label>
        <input
          type="text"
          id="pcs"
          placeholder="Add quantity"
          value={quantity}
          onChange={handleQUantityChange}
        />
        <div className="buttons">
          <button
            className="button"
            style={{ marginLeft: "0" }}
            onClick={onClose}
          >
            Close
          </button>
          <button className="button">Submit</button>
        </div>
      </form>
    </div>
  );
}
