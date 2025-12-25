import React from "react";
import Wireframe from "../assets/Wireframe.png";

export default function WireframeSection({ children }) {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)),
          url(${Wireframe})
        `,
      }}
    >
      {children}
    </section>
  );
}
