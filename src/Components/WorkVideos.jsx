// import React from "react";
// import leftVideo from "../assets/video-left.mp4";
// import rightVideo from "../assets/video-right.mp4";

// export default function WorkVideos() {
//   return (
//     <section className="w-full py-16">
//       <div className="max-w-[1400px] mx-auto px-4 flex justify-center">

//         {/* COMPOSITE GROUP */}
//         <div className="relative flex flex-col lg:flex-row items-center lg:items-start">

//           {/* LEFT VIDEO */}
//           <div
//             className="
//               relative
//               bg-white
//               p-4
//               shadow-xl
//               w-full
//               lg:w-[800px]
//               flex-shrink-0
//               lg:-translate-x-[35px]
//             "
//           >
//             <div className="aspect-[16/9] overflow-hidden bg-black">
//               <video
//                 src={leftVideo}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           </div>

//           {/* RIGHT VIDEO */}
//           <div
//             className="
//               relative
//               mt-6
//               lg:mt-[-80px]
//               bg-white
//               p-3
//               shadow-xl
//               w-full
//               lg:w-[420px]
//               flex-shrink-0
//               lg:-ml-[120px]
//               lg:translate-x-[35px]
//             "
//           >
//             <div className="aspect-[16/9] overflow-hidden bg-black">
//               <video
//                 src={rightVideo}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import leftVideo from "../assets/video-left.mp4";
import rightVideo from "../assets/video-right.mp4";

export default function WorkVideos() {
  return (
    <section className="w-full py-20 bg-[#f3f3f3]">
      <div className="max-w-[1400px] mx-auto px-4 flex justify-center">

        {/* COMPOSITE GROUP */}
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-center lg:items-start">

            {/* TEXT ABOVE LEFT VIDEO — CENTERED */}
            <div className="w-full lg:w-[800px] text-center mb-6">
              <p className="text-sm md:text-base font-semibold">
                <span className="text-[#dde82d]">Creative</span>{" "}
                storytelling and branding.
              </p>
            </div>

            {/* LEFT VIDEO */}
            <div
              className="
                relative
                bg-white
                p-4
                shadow-xl
                w-full
                lg:w-[800px]
                flex-shrink-0
                lg:-translate-x-[35px]
              "
            >
              <div className="aspect-[16/9] overflow-hidden bg-black">
                <video
                  src={leftVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              flex
              flex-col
              items-center
              lg:items-start
              mt-8
              lg:mt-[-40px]   /* moved down a bit more */
              lg:-ml-[120px]
              lg:translate-x-[35px]
            "
          >
            {/* RIGHT VIDEO */}
            <div
              className="
                relative
                bg-white
                p-3
                shadow-xl
                w-full
                lg:w-[420px]
                flex-shrink-0
              "
            >
              <div className="aspect-[16/9] overflow-hidden bg-black">
                <video
                  src={rightVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* TEXT BELOW RIGHT VIDEO — CENTERED */}
            <div className="w-full lg:w-[420px] text-center mt-6">
              <p className="text-sm md:text-base font-semibold">
                Flawless{" "}
                <span className="text-[#dde82d]">digital marketing</span>{" "}
                execution.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}





