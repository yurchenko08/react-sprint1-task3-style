import React from "react";
import "./app.css";
import Button from "../button/button.js";

export default function App() {
  return (
    <div data-testid='element-app' className='wrapper-app'>
      <Button />
    </div>
  );
}
