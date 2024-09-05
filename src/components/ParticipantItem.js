export default function ParticipantItem({
  item,
  onSelection,
  selectedItem,
  purchases,
}) {
  const isSelected = selectedItem?.id === item.id;

  const totalPaidByParticipant = (purchases || []).reduce((total, purchase) => {
    const participantPurchases = (purchase.participants || []).filter(
      (p) => p.id === item.id
    );

    const totalForThisPurchase = participantPurchases.reduce(
      (sum, p) => sum + p.amount,
      0
    );

    return total + totalForThisPurchase;
  }, 0);

  console.log("Rendering ParticipantItem:", item);

  return (
    <li
      className={
        isSelected ? "item participant-item selected" : "item participant-item"
      }
      onClick={() => onSelection(item)}
    >
      <input
        type="checkbox"
        className="participant-name"
      />
      {item.name}
      <p className="participant-cost">{totalPaidByParticipant.toFixed(2)}$</p>
    </li>
  );
}
