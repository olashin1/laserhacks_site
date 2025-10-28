/**
 * Card component will be used to show pictures
 * of the event from last year
 *
 */

import "../styles/Card.css";

export default function Card({ path }) {
  return (
    <div className="photo-container">
      <img className="photo" src={path} alt="Photo from last year's event" />
    </div>
  );
}
