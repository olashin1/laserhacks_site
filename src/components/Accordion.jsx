/**
 * The accordion component allows
 * props to be passed in to display a question,
 * and on click an answer. It can open and close
 * it's window.
 */
import { useState } from "react";
import "../styles/Accordion.css";

export default function Accordion(prop) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="accordion-container"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className="accordion-question">
        <p className="question">{prop.question}</p>
        <p className="plus-minus">{isOpen ? "-" : "+"}</p>
      </div>
      {isOpen && <div className="answer-container"> {prop.answer}</div>}
    </div>
  );
}
