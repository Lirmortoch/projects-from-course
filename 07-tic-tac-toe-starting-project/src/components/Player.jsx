import { useState } from "react"

export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing]  = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }
    function handleChangeName(e) {
        setPlayerName(e.target.value);
    }

    let playerNameField = <span className="player-name">{playerName}</span>;
    let btnCaption = 'Edit';

    if (isEditing) {
        playerNameField = <input type="text" name="name-input" id="name-input" value={playerName} required onChange={handleChangeName} />;
        btnCaption = 'Save';
    }
    
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {playerNameField}
              <span className="player-symbol">{symbol}</span>
            </span>
            
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    )
}