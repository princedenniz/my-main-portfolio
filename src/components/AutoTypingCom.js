import { jsx as _jsx } from "react/jsx-runtime";
import Typewriter from "react-typewriter-effect";
var AutoTypingComponent = function (_a) {
    var multiText = _a.multiText, _b = _a.multiTextColors, multiTextColors = _b === void 0 ? [] : _b, _c = _a.textStyle, textStyle = _c === void 0 ? { fontFamily: "Arial", color: "#3F3D56", fontWeight: 500, fontSize: "24px", display: "inline" } : _c, _d = _a.typeSpeed, typeSpeed = _d === void 0 ? 100 : _d, _e = _a.startDelay, startDelay = _e === void 0 ? 100 : _e;
    return (_jsx(Typewriter, { textStyle: textStyle, startDelay: startDelay, cursorColor: "#3F3D56", multiText: multiText, multiTextDelay: 1000, typeSpeed: typeSpeed, multiTextLoop: true }));
};
export default AutoTypingComponent;
