/** 
 * This components is used for the prospective
 * LaserHacker to apply to the hackathon,
 * it will direct them to a google form
 * 
 * TODO: Have the redirectToApply button redirect to actual form
 */

import '../styles/ApplyBtn.css'
import EnterAnimation from './EnterAnimation';

export default function ApplyBtn() {
    return (
        <>
            <EnterAnimation>
                <button onClick={redirectToApply} className='apply-btn'>
                    Apply Now
                </button >
            </EnterAnimation>
        </>
    )
}

function redirectToApply() {
    window.open("https://google.com");
}