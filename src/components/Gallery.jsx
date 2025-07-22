/**
 * The galley will display a photo
 * album of the previous year's event
 */

import Card from "./Card";
import "../styles/Gallery.css"

// TODO: add real images to the images array 
export default function Gallery() {
    const images = [
        "/image.png",
        "/image.png",
        "/image.png",
        "/image.png",
        "/image.png",
        "/image.png",
    ]
    const cards = images.map((imgPath, idx) => <Card key={idx} path={imgPath} />);
    return (
        <>
            <h3 className="gallery-title">Highlights from Last Time</h3>
            <div className="gallery-grid">
                {cards}
            </div>
        </>
    );
}