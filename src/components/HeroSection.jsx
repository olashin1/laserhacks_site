/**
 * FILE: HeroSection.jsx
 * This is the hero section of the website
 * It will show some bold words to set the tone of the site
 * and it will have a description about IVC's annual hackathon
 */

import '../styles/HeroSection.css'
import ApplyBtn from '../components/ApplyBtn'
import EnterAnimation from './EnterAnimation';

// GPT generated description
const description = `Join us for LaserHacks, Irvine Valley College's annual hackathon where students come together
to turn bold ideas into reality. Whether you're here to learn something new, build your first app, or compete
 there’s a place for you. Collaborate with like - minded peers, gain mentorship, and bring your vision to life.`;

export default function HeroSection() {
    return (
        <>

            <div className="hero-container">
                <h1 className='header'>LaserHacks</h1>
                <h2 className="tone-words">Code. Collaborate. Create.</h2>
                <p className="description">{description}</p>
                <div className='apply-btn'>
                    <ApplyBtn />
                </div>
            </div>
        </>
    )
}