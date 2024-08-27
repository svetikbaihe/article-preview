import React from "react";
import Button from "./elements/Button";
import { IoMdShareAlt } from "react-icons/io";

import "./App.scss";

const App: React.FC = () => {
  const handleClick = () => {
    console.log("Clicked!");
  };

  return (
    <Button
      onClick={handleClick}
      Icon={IoMdShareAlt}
    />
  );
};

export default App;
