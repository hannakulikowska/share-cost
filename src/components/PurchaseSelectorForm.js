import { useState } from "react";

export default function PurchaseSelectorForm({
  onClose,
  selectedPurchase,
  participantItems,
  onSubmit,
}) {
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");
  const [payerParticipantId, setPayerParticipantId] = useState("");

  function handleQuantityChange(e) {
    const value = parseInt(e.target.value, 10);

    const remainingQuantity =
      selectedPurchase.quantity - selectedPurchase.purchasedQuantity;

    if (value > 0 && value <= remainingQuantity) {
      setQuantity(value);
    } else {
      setQuantity("");
    }
  }

  function handleAmountChange(e) {
    const value = e.target.value;

    const validNumberPattern = /^\d*\.?\d*$/;

    if (validNumberPattern.test(value)) {
      setAmount(value);
    } else {
      setAmount("");
    }
  }

  function handlePayerChange(e) {
    setPayerParticipantId(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (quantity && amount && payerParticipantId) {
      const roundedAmount = parseFloat(parseFloat(amount).toFixed(2));
      onSubmit(quantity, roundedAmount, payerParticipantId);
    } else {
      console.error("Form submission error: Missing or invalid fields");
    }
  }

  return (
    <div>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <label
          className="label"
          htmlFor="name"
        >
          Choose who pays for{" "}
          <span style={{ fontWeight: "bold" }}>{selectedPurchase.name}</span>
        </label>
        <select
          id="name"
          onChange={handlePayerChange}
          value={payerParticipantId}
          required
        >
          <option
            value=""
            disabled
          >
            Select participant
          </option>
          {participantItems.map((participant) => (
            <option
              key={participant.id}
              value={participant.id}
            >
              {participant.name}
            </option>
          ))}
        </select>

        <label
          className="label"
          htmlFor="quantity"
        >
          Quantity
        </label>
        <input
          type="text"
          id="quantity"
          placeholder="Enter how much was purchased"
          value={quantity}
          onChange={handleQuantityChange}
          max={selectedPurchase.quantity - selectedPurchase.purchasedQuantity}
          required
        />

        <label
          htmlFor="amount"
          className="label"
        >
          Amount
        </label>
        <input
          type="text"
          id="amount"
          placeholder="Enter total amount paid"
          value={amount}
          onChange={handleAmountChange}
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
