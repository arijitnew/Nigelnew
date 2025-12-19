// import React from "react";
// import bg from "../assets/bg.png";

// export default function DarkSection({ children, className = "" }) {
//   return (
//     <section
//       className={`relative bg-no-repeat bg-cover bg-center ${className}`}
//       style={{
//         backgroundImage: `url(${bg})`,
//       }}
//     >
//       {/* dark overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* content */}
//       <div className="relative z-10">
//         {children}
//       </div>
//     </section>
//   );
// }
// import React from "react";
// import bg from "../assets/bg.png";

// export default function DarkSection({ children, className = "" }) {
//   return (
//     <section
//       className={`relative bg-cover bg-center bg-no-repeat ${className}`}
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       {/* dark overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* content */}
//       <div className="relative z-10 text-white">
//         {children}
//       </div>
//     </section>
//   );
// }
import React from "react";
import bg from "../assets/bg.png";

export default function DarkSection({ children }) {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),
          url(${bg})
        `,
      }}
    >
      {children}
    </section>
  );
}



