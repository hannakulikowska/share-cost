export default function ParticipantItem({ item }) {
  return (
    <li className="item participant-item">
      <input
        type="checkbox"
        className="participant-name"
      />
      {item.name}
      <p className="participant-cost">0$</p>
    </li>
  );
}
