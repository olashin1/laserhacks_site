/**
 * The galley will display a photo
 * album of the previous year's event
 */

import Card from "./Card";
import "../styles/Gallery.css";

export default function Gallery() {
  const images = [
    "/gallery/IMG_1.png",
    "/gallery/IMG_2.png",
    "/gallery/IMG_3.png",
    "/gallery/IMG_4.png",
    "/gallery/IMG_5.png",
    "/gallery/IMG_6.png",
  ]
  const cards = images.map((imgPath, idx) => <Card key={idx} path={imgPath} />);
  return (
    <>
      <h3 className="gallery-title">Highlights from Last Year</h3>
      <div className="gallery-grid">
        {cards}
      </div>
    </>
  );
}
