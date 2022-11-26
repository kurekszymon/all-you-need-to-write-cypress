import { useState } from "react";
import "./Introduction.css";

export default function Introduction() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <div className="module__introduction">
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
        <p>
          {!isButtonClicked
            ? "and see what happens!"
            : "You did it! Choose another module :)"}
        </p>
      </div>
    </div>
  );
}
