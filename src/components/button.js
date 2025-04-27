import React, { useState } from "react";
import "../styles/button.css";

function Button() {
  const [pastel, setPastel] = useState("white");

  const colors = [
    { name: "Pink", code: "#FFD1DC" },
    { name: "Green", code: "#B4E7CE" },
    { name: "Blue", code: "#AEC6CF" },
    { name: "Yellow", code: "#FDFD96" },
    { name: "Purple", code: "#77DD77" },
    { name: "Peach", code: "#FFDAB9" },
    { name: "Lavender", code: "#E6E6FA" },
    { name: "Mint", code: "#98FF98" },
    { name: "Coral", code: "#FB3AB" },
    { name: "Aqua", code: "#A7C7E7" },
    { name: "Turquoise", code: "#A0D6B4" },
    { name: "Lemon", code: "#F1E8B8" },
    { name: "Grey", code: "#BFBFBF" },
    { name: "Rose", code: "#FFCCCB" },
    { name: "Periwinkle", code: "#CCCCFF" },
    { name: "Lilac", code: "#B9AEDC" },
    { name: "Mint Green", code: "#A8E6CF" },
    { name: "Butter", code: "#F9E79F" },
    { name: "Sage", code: "#9C9E7B" },
    { name: "Salmon", code: "#FF9999" },
    { name: "Skyblue", code: "#80C6E0" },
    { name: "Grapefruit", code: "#F79C42" },
    { name: "Sand", code: "#D9B88C" },
    { name: "Plum", code: "#D1A1D1" },
    { name: "Cotton Candy", code: "#B4E7CE" },
    { name: "Teal", code: "#A1D6D1" },
    { name: "Cherry Blossom", code: "#F2C1D1" },
    { name: "Tangerine", code: "#F7B89C" },
    { name: "Orchid", code: "#DAA6D4" },
    { name: "Watermelon", code: "#F9A7B0" },
  ];

  return (
    <div className="container" style={{ backgroundColor: pastel }}>
      <h1>Choose a color you prefer</h1>
      <div className="button-wrapper">
        {colors.map((color) => (
          <button
            key={color.name}
            className="color-button"
            onClick={() => setPastel(color.code)}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Button;
