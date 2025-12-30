import React, { useEffect, useState } from "react";

const WORDS = ["own it", "have fun", "think big"];
const TYPE_SPEED = 150;
const BLINK_INTERVAL = 500;
const BLINKS_REQUIRED = 4;
const HIGHLIGHT_DURATION = 900;

export default function WeTypingHero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [highlight, setHighlight] = useState(false);

  const [caretVisible, setCaretVisible] = useState(true);
  const [blinking, setBlinking] = useState(false);
  const [blinkCount, setBlinkCount] = useState(0);

  /* ---------------- Typing ---------------- */
  useEffect(() => {
    if (highlight || blinking) return;

    const word = WORDS[wordIndex];

    if (charIndex < word.length) {
      const t = setTimeout(() => {
        setTypedText((prev) => prev + word[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, TYPE_SPEED);

      return () => clearTimeout(t);
    }

    if (charIndex === word.length) {
      const t = setTimeout(() => {
        setTypedText((prev) => prev + ".");
        setBlinking(true);
        setBlinkCount(0);
      }, 300);

      return () => clearTimeout(t);
    }
  }, [charIndex, wordIndex, blinking, highlight]);

  /* ---------------- Caret blinking ---------------- */
  useEffect(() => {
    if (!blinking) return;

    const interval = setInterval(() => {
      setCaretVisible((v) => !v);
      setBlinkCount((c) => c + 1);
    }, BLINK_INTERVAL);

    if (blinkCount >= BLINKS_REQUIRED * 2) {
      clearInterval(interval);
      setBlinking(false);
      setCaretVisible(false);
      setHighlight(true);
    }

    return () => clearInterval(interval);
  }, [blinking, blinkCount]);

  /* ---------------- Highlight → reset ---------------- */
  useEffect(() => {
    if (!highlight) return;

    const t = setTimeout(() => {
      setHighlight(false);
      setTypedText("");
      setCharIndex(0);
      setBlinkCount(0);
      setCaretVisible(true);
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, HIGHLIGHT_DURATION);

    return () => clearTimeout(t);
  }, [highlight]);

  return (
<section className="w-full pt-10 pb-24 px-6 bg-[#f5f6f6] text-center">


      {/* BRAND */}
      <p
  className="text-base font-bold tracking-widest mb-6"
  style={{ color: "#e10051" }}
>
  NQ DIGITAL INDIA
</p>



      {/* MAIN HEADLINE — BIGGER SIZE, SAME WEIGHT */}
      <h1
        className="flex justify-center flex-wrap"
        style={{
          color: "#26282c",
          fontSize: "68px",     // ⬅️ BIGGER
          lineHeight: "1.12",
          fontWeight: 700,      // ⬅️ SAME weight (not bolder)
        }}
      >
        <span>We</span>

        <span
          className="ml-[0.18em] relative inline-block transition-colors duration-300"
          style={
            highlight
              ? {
                  backgroundColor: "#26282c",
                  color: "#ffffff",
                  padding: "0 0.5rem",
                }
              : { color: "#26282c" }
          }
        >
          {typedText}

          {/* Caret */}
          {!highlight && (
            <span
              style={{
                position: "absolute",
                right: "-6px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "1px",
                height: "1.15em",
                backgroundColor: "#26282c",
                borderRadius: "1px",
                opacity: caretVisible ? 1 : 0,
              }}
            />
          )}
        </span>
      </h1>

      {/* SUB-HEADING */}
      {/* SUB-HEADING */}
<p
  className="mt-2 font-semibold mx-auto text-center"
  style={{
    color: "#26282c",
    fontSize: "50px",
    lineHeight: "1.3",
    maxWidth: "720px",
    fontWeight: 700,
  }}
>
  We’re the alternative to the agency status quo.
</p>

{/* ORANGE DIVIDER */}
<div
  className="mx-auto mt-6 mb-6"
  style={{
    width: "64px",
    height: "3px",
    backgroundColor: "#e10051",
  }}
/>


{/* BODY TEXT */}
<p
  className="mt-0 max-w-3xl mx-auto text-center"
  style={{
    color: "rgba(38, 40, 44, 0.8)",
    fontSize: "20px",
    lineHeight: "1.7",
  }}
>
  Here to create opportunities, deliver beyond expectations, raise the bar
  with our results and set new benchmarks for your business that is of equal
  value to us as it is to you.
</p>

    </section>
  );
}
