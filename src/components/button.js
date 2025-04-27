import React, {useState} from "react";
import "../styles/button.css"

function Button() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(!clicked);
}
return(
    <div className="button-container">
    <button
      className={clicked ? "clicked" : ""}
      onClick={handleClick}
    >
      Click Me
    </button>
  </div>
)
}