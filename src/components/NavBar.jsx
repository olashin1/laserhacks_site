/**
 * The navbar component will contain
 * some divs that can link the user to
 * home, a sponsor us page, and about us page.
 */

import '../styles/NavBar.css'

export default function NavBar() {
    return (
        <nav className='navbar-container'>
            <div className='nav-btn'>Home</div>
            <div className='nav-btn'>Sponsor Us</div>
            <div className='nav-btn'>About Us</div>
        </nav>
    );
}