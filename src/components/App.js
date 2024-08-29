import Participants from "./Participants";
import Purchases from "./Purchases";
import AddPurchaseForm from "./AddPurchaseForm";
import { useState } from "react";

export default function App() {
  const [openAddPurchaseForm, setOpenAddPurchaseForm] = useState(false);

  function handleOpenAddPurchaseForm() {
    setOpenAddPurchaseForm((open) => !open);
  }

  return (
    <div className="app">
      <div className="column">
        <Purchases />
        <button
          className="button"
          onClick={handleOpenAddPurchaseForm}
        >
          {openAddPurchaseForm ? "Close the form" : "Add purchase"}
        </button>
        {openAddPurchaseForm && <AddPurchaseForm />}
      </div>
      <div className="column">
        <Participants />
        <button className="button">Add participant</button>
      </div>
    </div>
  );
}
