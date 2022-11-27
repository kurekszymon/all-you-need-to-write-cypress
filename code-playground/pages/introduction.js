import { useState } from "react";
import styles from "../styles/Introduction.module.css";

export default function Introduction() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <>
      <div
        className={`module__introduction ${styles.wrapper}`}
        id="introduction_wrapper"
      >
        {!isButtonClicked ? (
          <>
            <div className={`module__introduction--text ${styles.welcome}`}>
              <p>Hey!</p>
              <p>
                Try to<code> cy.get </code>me
              </p>
            </div>
            <div
              className={`module__introduction--button ${styles.btnWrapper}`}
            >
              <button onClick={() => setIsButtonClicked(true)}>
                <pre>
                  <code> Click me </code>
                </pre>
              </button>
              <p>and see what happens!</p>
            </div>
          </>
        ) : (
          <>
            <p className={`success-message`}>You did it!</p>
            <input
              className={`example-input ${styles.exampleInput}`}
              value={userInput}
              placeholder={"Now fill up this input"}
              onChange={handleChange}
            />
            <p className={`typed-message`}>
              You typed: {userInput ? userInput : "nothing yet :/"}
            </p>
          </>
        )}
      </div>
    </>
  );
}
