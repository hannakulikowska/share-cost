import ParticipantItem from "./ParticipantItem";

export default function Participants() {
  return (
    <form className="form participants-form">
      <h1>Participants</h1>
      <ul className="participants-list">
        <ParticipantItem />
      </ul>
      <button className="button">Add participant</button>
    </form>
  );
}
