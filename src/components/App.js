import Participants from "./Participants";
import Purchases from "./Purchases";
import PurchaseForm from "./PurchaseForm";
import { useState } from "react";

export default function App() {
  const [openPurchaseForm, setOpenPurchaseForm] = useState(false);

  const [purchaseItems, setPurchaseItems] = useState([]);

  function handleOpenPurchaseForm() {
    setOpenPurchaseForm((open) => !open);
  }

  function handleAddPurchase(item) {
    setPurchaseItems((purchaseItems) => [...purchaseItems, item]);
    handleOpenPurchaseForm();
  }

  return (
    <div className="app">
      <div className="column">
        <Purchases purchaseItems={purchaseItems} />
        <button
          className="button"
          onClick={handleOpenPurchaseForm}
        >
          {openPurchaseForm ? "Close the form" : "Add purchase"}
        </button>
        {openPurchaseForm && (
          <PurchaseForm onAddPurchaseItem={handleAddPurchase} />
        )}
      </div>
      <div className="column">
        <Participants />
        <button className="button">Add participant</button>
      </div>
    </div>
  );
}
