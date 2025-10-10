import { useState } from "react"

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing]  = useState(false);

    function handleChangeName() {
        setIsEditing(!isEditing);
    }

    let playerNameField = <span className="player-name">{name}</span>;
    if (isEditing) playerNameField = <input type="text" name="name-input" id="name-input" value={name}/>;
    
    return (
        <li>
            <span className="player">
              {playerNameField}
              <span className="player-symbol">{symbol}</span>
            </span>
            
            <button onClick={handleChangeName}>Edit</button>
        </li>
    )
}