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
  ];

  // we duplicate the list so the animation can wrap with no jump
  const loopImages = [...images, ...images];

  return (
    <>
      <h3 className="gallery-title">Highlights from Last Year</h3>

      <div className="carousel-shell ambient">
        <div className="ambient-window">
          <div className="ambient-track">
            {loopImages.map((imgPath, idx) => (
              <div className="ambient-slide" key={idx}>
                <Card path={imgPath} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
