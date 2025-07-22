/** 
 * This components is used for the prospective
 * LaserHacker to apply to the hackathon,
 * it will direct them to a google form
 * 
 * TODO: Have the redirectToApply button redirect to actual form
 */

import '../styles/ApplyBtn.css'
import EnterAnimation from './EnterAnimation';
import Gestures from './Gestures';

export default function ApplyBtn() {
    return (
        <>
            <EnterAnimation>
                <Gestures>
                    <button onClick={redirectToApply} className='apply-btn'>
                        Register Now
                    </button >
                </Gestures>
            </EnterAnimation>
        </>
    )
}

function redirectToApply() {
    window.open("https://google.com");
}