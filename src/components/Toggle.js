import React, { useState } from "react";

function Toggle() {

  const [isButtonOff, setButtonOff] = useState(false)
  const toggleButton = setButtonOff((isButtonOff) => !isButtonOff)
  const buttonColor = isButtonOff ? "white" : "red"

  return <button 
            onClick={toggleButton}
            style={{background: buttonColor}}
          >
              {isButtonOff ? "ON" : "OFF"}
          </button>;
}

export default Toggle;
