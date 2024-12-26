import React from "react";
import Typewriter from "react-typewriter-effect";

interface AutoTypingComponentProps {
  multiText: string[];
  multiTextColors?: string[]; // Optional array of colors for each text
  textStyle?: React.CSSProperties; // Custom text style
  typeSpeed?: number;
  startDelay?: number;
}

const AutoTypingComponent: React.FC<AutoTypingComponentProps> = ({
  multiText,
  multiTextColors = [],
  textStyle = { fontFamily: "Arial", color: "#3F3D56", fontWeight: 500, fontSize: "24px", display: "inline" },
  typeSpeed = 100,
  startDelay = 100,
}) => {
  return (
    <Typewriter
      textStyle={textStyle}
      startDelay={startDelay}
      cursorColor="#3F3D56"
      multiText={multiText} // Use multiText prop as usual
      multiTextDelay={1000}
      typeSpeed={typeSpeed}
      multiTextLoop
    />
  );
};

export default AutoTypingComponent;
