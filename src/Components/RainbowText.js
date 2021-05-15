import React from "react";

const RainbowText = (props) => {
  const colors = ["red", "blue", "orange", "green","purple", "indigo"];
  const { text } = props;
  const rainbowText = Array.from(text).map((letter, idx) => (
    <span key={idx} style={{ color: colors[idx % colors.length] }}>
      {letter}
    </span>
  ));
  return (
    <>
      {rainbowText}
    </>
  );
};

export default RainbowText;
