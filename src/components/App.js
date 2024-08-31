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

  const [selectedPurchase, setSelectedPurchase] = useState(null);
  const [selectedParticipant, setSelectedParticipant] = useState(null);

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

  function handlePurchaseSelection(item) {
    setSelectedPurchase((cur) => (cur?.id === item.id ? null : item));
    setOpenPurchaseForm(false);
    // !TODO: create and implement here a function to open a form for chousing who pays for this selected purchase
  }

  function handleParticipantSelection(item) {
    setSelectedParticipant((cur) => (cur?.id === item.id ? null : item));
    setOpenParticipantForm(false);
    // !TODO: create and implement here a function to open a form for chousing who pays for this selected purchase
  }

  return (
    <div className="app">
      <div className="column">
        <Purchases
          purchaseItems={purchaseItems}
          onSelection={handlePurchaseSelection}
          selectedPurchase={selectedPurchase}
        />
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
        <Participants
          participantItems={participantItems}
          onSelection={handleParticipantSelection}
          selectedParticipant={selectedParticipant}
        />
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
