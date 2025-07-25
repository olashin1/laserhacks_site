/**
 * This is the Home page component
 * this is used for react routing.
 * The Home page will include a
 *  - Hero Section
 *  - Gallery
 *  - FAQ Section
 */

import HeroSection from "../components/HeroSection";
import FaqSection from "../components/FaqSection";
import Gallery from "../components/Gallery";
import NavBar from "../components/NavBar";

export default function Home() {
    return (
        <>
            <NavBar />
            <HeroSection />
            <Gallery />
            <FaqSection />
        </>
    )
}