
import React from "react";
import Primary from "../assets/Primary.png";

export default function DarkSection({ children }) {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),
          url(${Primary})
        `,
      }}
    >
      {children}
    </section>
  );
}



