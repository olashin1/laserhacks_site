/**
 * Card component will be used to show pictures
 * of the event from last year
 *
 */

import "../styles/Card.css";

export default function Card(prop) {
  return (
    <>
      <div className="photo-container">
        <img className="photo" src={prop.path} alt="Photo" />
      </div>
    </>
  );
}
