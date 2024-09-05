import Participants from "./Participants";
import Purchases from "./Purchases";
import PurchaseForm from "./PurchaseForm";
import ParticipantForm from "./ParticipantForm";
import PurchaseSelectorForm from "./PurchaseSelectorForm";
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
    const newItem = { ...item, purchasedQuantity: 0 };
    setPurchaseItems((purchaseItems) => [...purchaseItems, newItem]);
    handleOpenPurchaseForm(false);
  }

  function handleAddParticipant(item) {
    setParticipantItems((participantItems) => [...participantItems, item]);
    handleOpenParticipantForm(false);
  }

  function handlePurchaseSelection(item) {
    setSelectedPurchase((cur) => (cur?.id === item.id ? null : item));
    setOpenPurchaseForm(false);
  }

  function handleParticipantSelection(item) {
    setSelectedParticipant((cur) => (cur?.id === item.id ? null : item));
    setOpenParticipantForm(false);
    // !TODO: create and implement here a function to open purchases' list of selected person
  }

  function handleClosePurchaseSelector() {
    setSelectedPurchase(null);
  }

  function handlePurchases(itemId, quantity, amount, payerParticipantId) {
    setPurchaseItems((items) =>
      items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              purchasedQuantity: item.purchasedQuantity + quantity,
              totalPaid: (item.totalPaid || 0) + amount,
              participants: [
                ...(Array.isArray(item.participants) ? item.participants : []),
                { id: Number(payerParticipantId), amount: amount },
              ],
            }
          : item
      )
    );

    handleClosePurchaseSelector();
  }

  const showAddPurchaseButton =
    (purchaseItems.length === 0 || selectedPurchase === null) &&
    !openPurchaseForm;

  return (
    <div className="app">
      <div className="column">
        <Purchases
          purchaseItems={purchaseItems}
          onSelection={handlePurchaseSelection}
          selectedPurchase={selectedPurchase}
        />
        {selectedPurchase && participantItems.length > 0 && (
          <PurchaseSelectorForm
            onClose={handleClosePurchaseSelector}
            onSubmit={(quantity, roundedAmount, payerParticipantId) =>
              handlePurchases(
                selectedPurchase.id,
                quantity,
                roundedAmount,
                payerParticipantId
              )
            }
            selectedPurchase={selectedPurchase}
            participantItems={participantItems}
          />
        )}
        {openPurchaseForm && (
          <PurchaseForm
            onAddPurchaseItem={handleAddPurchase}
            onClose={handleOpenPurchaseForm}
          />
        )}
        {showAddPurchaseButton && (
          <button
            className="button"
            onClick={handleOpenPurchaseForm}
          >
            Add purchase
          </button>
        )}
      </div>
      <div className="column">
        <Participants
          participantItems={participantItems}
          onSelection={handleParticipantSelection}
          selectedParticipant={selectedParticipant}
          purchaseItems={purchaseItems}
        />
        {selectedPurchase && participantItems.length === 0 ? (
          <p style={{ fontSize: "14px", color: "red" }}>
            Add at least one participant
          </p>
        ) : (
          ""
        )}
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
