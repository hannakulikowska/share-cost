import { useState } from "react";

export default function ParticipantForm({ onAddParticipantItem }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newParticipantItem = {
      name: String(name),
      id: Date.now(),
    };

    console.log(newParticipantItem);

    onAddParticipantItem(newParticipantItem);
    setName("");
  }

  return (
    <div>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="name"
          className="label"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Add name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}
