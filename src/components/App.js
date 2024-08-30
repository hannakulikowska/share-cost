import Participants from "./Participants";
import Purchases from "./Purchases";
import PurchaseForm from "./PurchaseForm";
import ParticipantForm from "./ParticipantForm";
import { useState } from "react";

export default function App() {
  const [openPurchaseForm, setOpenPurchaseForm] = useState(false);
  const [openParticipantForm, setOpenParticipantForm] = useState(false);

  const [purchaseItems, setPurchaseItems] = useState([]);
  const [participantItems, setParticipantItems] = useState([]);

  function handleOpenPurchaseForm() {
    setOpenPurchaseForm((open) => !open);
  }

  function handleOpenParticipantForm() {
    setOpenParticipantForm((open) => !open);
  }

  function handleAddPurchase(item) {
    setPurchaseItems((purchaseItems) => [...purchaseItems, item]);
    handleOpenPurchaseForm();
  }

  function handleAddParticipant(item) {
    setParticipantItems((participantItems) => [...participantItems, item]);
    handleOpenParticipantForm();
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
        <Participants participantItems={participantItems} />
        <button
          className="button"
          onClick={handleOpenParticipantForm}
        >
          {openParticipantForm ? "Close the form" : "Add participant"}
        </button>
        {openParticipantForm && (
          <ParticipantForm onAddParticipantItem={handleAddParticipant} />
        )}
      </div>
    </div>
  );
}
