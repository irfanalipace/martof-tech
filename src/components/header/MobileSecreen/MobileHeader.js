// components/Header.js
import React from 'react';
import './MobileHeader.css';
import '@fortawesome/fontawesome-free/css/all.css';

function MobileHeader() {
  return (
    <div className='mobile-main-section'>
      <header className="mobile-header">
        <div className='mobile-header-sections'>
          <nav>
            <ul>
              <li>
                <h5 className='mobile-name-app'>LAST CHANCE TICKET</h5>
                <p className='mobile-name-app-li-item'>YOUR TRUSTED TICKET SELLER</p>
              </li>
              <li><a href="/about" className='mobile-soicial-media-flower'>100+ Social Media Followers</a></li>
              <li><a href="/contact" className='mobile-request-event'>Request Event</a></li>
              <li><a href="/" className='mobile-request-event'>Contact Us</a></li>
              <li><a href="/" className='mobile-phone-icon'> <i className="fas fa-phone"style={{color:"#4AB9E2"}}></i></a></li>
              <li><button className="mobile-sell-tickets-btn">Sell Tickets</button></li>
              <li><button className="mobile-login-btn">Login</button></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default MobileHeader;
