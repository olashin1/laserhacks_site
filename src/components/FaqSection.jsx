/**
 * FAQ (Frequently Asked Questions) Component:
 * This component will contain some frequent asked 
 * questions about hackathons and display them as a 
 * FAQ accordion. 
 */
import Accordion from "./Accordion";
import '../styles/FaqSection.css';
import accordion_data from "../assets/accordion_data";

export default function FaqSection() {
    const accordions = accordion_data.map((data, idx) => <Accordion question={data.question} answer={data.answer} />)
    return (
        <div className="faq-section">
            <p className='faq-header'>Frequenty Asked Questions</p>
            {accordions}
        </div>
    )
}