import ParticipantItem from "./ParticipantItem";

export default function Participants({
  participantItems,
  onSelection,
  selectedParticipant,
  purchaseItems,
}) {
  return (
    <div className="participants">
      <h2>Participants</h2>
      <ul className="participants-list">
        {participantItems.map((item) => (
          <ParticipantItem
            item={item}
            key={item.id}
            onSelection={onSelection}
            selectedItem={selectedParticipant}
            purchases={purchaseItems}
          />
        ))}
      </ul>
    </div>
  );
}
