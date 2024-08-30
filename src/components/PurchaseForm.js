import { useState } from "react";

export default function PurchaseForm({ onAddPurchaseItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !quantity || !price) return;

    const newPurchaseItem = {
      name,
      quantity: Number(quantity),
      price: Number(price),
      id: Date.now(),
    };

    console.log(newPurchaseItem);

    onAddPurchaseItem(newPurchaseItem);
    setName("");
    setQuantity("");
    setPrice("");
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
          onChange={(e) => setQuantity(e.target.value)}
        />
        <label
          htmlFor="price"
          className="label"
        >
          Price
        </label>
        <input
          type="text"
          id="price"
          placeholder="Add price per piece"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}
