
import React from 'react';
import './Header.css'
import '@fortawesome/fontawesome-free/css/all.css';
function Header() {
  return (
    <div className='main-section'>
    <header className="header">
      <div className='header-sections'>
        
      <nav>
        <ul>
        <li>
        <h5 className='name-app'>LAST CHANCE TICKET</h5>
        
      </li>
      
      
          
          <li><a href="/about" className='soicial-media-flower'>100+Social Media Followers</a></li>
          <li><a href="/contact" className='request-event'>Request Event</a></li>
          <li><a href="/" className='request-event'>Contact Us</a></li>
          <li><a href="/"> <i className="fas fa-phone" style={{color:"#4AB9E2"}}></i></a></li>
          <li><button className='button-list'>Sell Teckets</button></li>
          <li><button className='button-list'>Login</button></li>
          
         
        </ul>
      </nav>
     
      </div>
    </header>
    </div>
  );
}

export default Header;
