import Participants from "./Participants";
import Purchases from "./Purchases";
import PurchaseForm from "./PurchaseForm";
import { useState } from "react";

export default function App() {
  const [openAddPurchaseForm, setOpenAddPurchaseForm] = useState(false);

  const [purchaseItems, setPurchaseItems] = useState([]);

  function handleOpenAddPurchaseForm() {
    setOpenAddPurchaseForm((open) => !open);
  }

  function handleAddPurchase(item) {
    setPurchaseItems((purchaseItems) => [...purchaseItems, item]);
    handleOpenAddPurchaseForm();
  }

  return (
    <div className="app">
      <div className="column">
        <Purchases purchaseItems={purchaseItems} />
        <button
          className="button"
          onClick={handleOpenAddPurchaseForm}
        >
          {openAddPurchaseForm ? "Close the form" : "Add purchase"}
        </button>
        {openAddPurchaseForm && (
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
