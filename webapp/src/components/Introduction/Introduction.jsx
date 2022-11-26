import { useState } from "react";
import "./Introduction.css";

export default function Introduction() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <>
      <div className="module__introduction">
        {isButtonClicked ? (
          <>
            <p className="success-message">You did it!</p>
            <input
              className="example-input"
              value={userInput}
              placeholder={"Now fill up this input"}
              onChange={handleChange}
            />
            <p className="typed-message">
              You typed: {userInput ? userInput : "nothing yet :/"}
            </p>
          </>
        ) : (
          <>
            <div className="module__introduction--text">
              <p>Hey!</p>
              Try to<code> cy.get </code>me
            </div>
            <div className="module__introduction--button">
              <button onClick={() => setIsButtonClicked(true)}>
                <pre>
                  <code> Click me </code>
                </pre>
              </button>
              <p>and see what happens!</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
