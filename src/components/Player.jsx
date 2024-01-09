import { useState } from "react";

export default function Player({ name, symbol }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => setIsEditing((prevState) => !prevState);

  const handleNameChange = (event) => setPlayerName(event.target.value);

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  let btnLabel = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleNameChange}
      />
    );
    btnLabel = "Save";
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{btnLabel}</button>
      </span>
    </li>
  );
}
