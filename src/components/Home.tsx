import React, { useState } from "react";
import PasswordGenerator from "./PasswordGenerator";
const Home: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  return (
    <>
      <h1>Password Generator</h1>
      <form>
        <label>Enter Your String</label>
        <input
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
      </form>
      <PasswordGenerator inputString={userInput} />
    </>
  );
};

export default Home;
