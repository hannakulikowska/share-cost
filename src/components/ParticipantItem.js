export default function ParticipantItem({ item, onSelection, selectedItem }) {
  const isSelected = selectedItem?.id === item.id;

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
      <p className="participant-cost">0$</p>
    </li>
  );
}
