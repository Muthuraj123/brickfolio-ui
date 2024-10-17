import React from 'react'
import './menu.css';
import { FaRegHeart, FaRegUser, FaTimes } from 'react-icons/fa';

function Menu({ openMenuFun, openMenu }) {

    return (
        <div className="menu" style={{ bottom: openMenu ? '0' : '100%', opacity: openMenu ? '1' : '0' }}>
            {openMenu && <FaTimes className='menu__icon' onClick={openMenuFun} />}
            <div className='menu--inner'>
                <div className="menu__item"><FaRegUser className='icon' />Login</div>
                <div className="menu__item"><FaRegHeart className='icon' />Shortlist</div>
                <div className="section3 housing__main__sub2">
                    <div className="section1">
                        <img src="/assets/images/sidebar_img.png" alt="image1" />
                        <img src="/assets/images/sidebar_img2.png" alt="image1" />
                        <p> We never charge on home purchases,
                            offering you expert guidance without
                            any hidden fees or extra costs.</p>
                    </div>
                    <div className="section2">
                        <h1>NEED HELP?</h1>
                        <p>Get in touch with Brickfolio Expert
                            for free consultation</p>
                        <form>
                            <input type="text" placeholder="Enter your name" />
                            <div class="phone_no">
                                <div>+91</div>
                                <input type="text" placeholder="Enter your phone number" />
                            </div>
                            <input type="email" placeholder="Enter your email" />
                            <button>ENQUIRE NOW</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu