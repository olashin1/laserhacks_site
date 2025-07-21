/** 
 * This components is used for the prospective
 * LaserHacker to apply to the hackathon,
 * it will direct them to a google form
 * 
 * TODO: Have the redirectToApply button redirect to actual form
 */

import '../styles/ApplyBtn.css'

export default function ApplyBtn() {
    return (
        <>
            <button onClick={redirectToApply} className='apply-btn'>
                Apply Now
            </button >
        </>
    )
}

function redirectToApply() {
    window.open("https://google.com");
}