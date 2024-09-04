export default function ParticipantItem({ item, onSelection, selectedItem }) {
  const isSelected = selectedItem?.id === item.id;

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
      <p className="participant-cost">{(item.totalPaid || 0).toFixed(2)}$</p>
    </li>
  );
}
