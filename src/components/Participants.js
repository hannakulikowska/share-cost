import ParticipantItem from "./ParticipantItem";

export default function Participants({ participantItems }) {
  return (
    <div className="participants">
      <h2>Participants</h2>
      <ul className="participants-list">
        {participantItems.map((item) => (
          <ParticipantItem
            item={item}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}
