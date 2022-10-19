import React from "react";
const style = {
  color: "rgb(18, 255, 18)",
  backgroundColor: "transparent",
  border: "0px",
  fontFamily: "Courier",
  fontSize: "33pt",
};
export default function Button() {
  return (
    <button style={style} data-testid='element-button'>
      Wake up Neo...
    </button>
  );
}
