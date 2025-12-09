import React from "react";
import Figure from "react-bootstrap/Figure";

export default function RBFigure() {
  return (
    <div style={{ padding: "20px" }}>

      <Figure

      >
        <Figure.Image
          width="100%"
          alt="React Features"
          src="src/assets/Screenshot 2025-12-05 120021.png"
          style={{ borderRadius: "8px" }}
        />


        <Figure.Caption style={{ paddingTop: "10px" }}>
        </Figure.Caption>
      </Figure>
    </div>
  );
}
