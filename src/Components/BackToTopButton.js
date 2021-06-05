import React, { useEffect, useState } from "react";

const Icon = () => (
  <>
    <svg
      x="0px"
      y="0px"
      width="122.883px"
      height="122.882px"
      viewBox="0 0 122.883 122.882"
      enableBackground="new 0 0 122.883 122.882"
    >
      <g>
        <path d="M0,61.441L0,61.441h0.018c0,16.976,6.872,32.335,17.98,43.443c11.108,11.107,26.467,17.979,43.441,17.979v0.018h0.001 h0.001v-0.018c16.974,0,32.335-6.872,43.443-17.98s17.98-26.467,17.98-43.441h0.018v-0.001V61.44h-0.018 c0-16.975-6.873-32.334-17.98-43.443C93.775,6.89,78.418,0.018,61.443,0.018V0h-0.002l0,0v0.018 c-16.975,0-32.335,6.872-43.443,17.98C6.89,29.106,0.018,44.465,0.018,61.439H0V61.441L0,61.441z M42.48,71.7 c-1.962,1.908-5.101,1.865-7.009-0.098c-1.909-1.962-1.865-5.101,0.097-7.009l22.521-21.839l3.456,3.553l-3.46-3.569 c1.971-1.911,5.117-1.862,7.029,0.108c0.055,0.058,0.109,0.115,0.16,0.175L87.33,64.594c1.963,1.908,2.006,5.047,0.098,7.009 c-1.908,1.963-5.047,2.006-7.01,0.098L61.53,53.227L42.48,71.7L42.48,71.7z" />
      </g>
    </svg>
  </>
);

const BackToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  return (
    <button
      id="scrollTop"
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
    >
      <Icon />
    </button>
  );
};

export default BackToTopButton;
