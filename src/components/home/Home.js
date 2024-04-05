
import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import './Home.css'
import MobileHeader from '../header/MobileSecreen/MobileHeader';
import image1 from '../../assets/image/img1.png'
import image2 from '../../assets/image/img2.png'
import image3 from '../../assets/image/img3.png'
import Main from '../Main/Main';
import RatingSections from '../Main/RatingSections';
import NewsLetter from '../Main/NewsLetter/NewsLetter';
import Footer from '../footer/Footer';
function Home() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
    <div className='main-section'>
    {screenWidth > 570 ? <Header /> : <MobileHeader />}
<div>
  <hr className='hr-line-desktop'></hr>
</div>
<div className='paragraph-heading'><p>Hurray! You are in the right place * 100K+ social media followers * We value every custome</p></div>
<div className='purchase-paragraph-heading'>
  <h5>
    <span style={{ color: '#22B3C1' }}>Purchase Tickets</span>
    <span style={{ color: 'white' }}> For A *</span>
  </h5>
</div>

<div className='total-coutnt'>

    <span >Semi Final 1 - T20 Cricket World Cup</span>
 
</div>
<div className='purchase-paragraph-heading-date-final'>
  <h5>
    <span >15 MAR, 2024</span>
  
  </h5>
</div>
<div className='next-waiting-data'>
  <span>Your next best-night-ever is waiting. And we have the tickets.</span>
</div>
<div className="search-bar" style={{marginTop:'23px'}}>
  <input type="text" placeholder="search For An Event Here " className="search-input search-icon-desktop-screen" />
  <button className="search-button">
    <i className="fas fa-search"></i>
  </button>
</div>

<div className='dev-data-sections'>
  <h2>Top Event Lists</h2>
</div>
    </div>
  
   
   <div className='image-sections-one-data'>
  
      <img src={image1} alt='text'/>
    
      <img src={image2} alt='text'/>
    
  
    <img src={image3} alt='text'/>
   
   </div>
 

   
   <div className='featured-data-class'>
  <h3 style={{ textAlign: 'center' }}>Featured Events On Sale Today</h3>
</div>
<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <div className="filter-menu" style={{ maxWidth: '80%' }}>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'center' }}>
      <li  className='filter-value'>Filter by:</li>
      <li><a href="#">All</a></li>
      <li><a href="#">Sports</a></li>
      <li><a href="#">Concert</a></li>
      <li><a href="#">Festival</a></li>
      <li><a href="#">Theater</a></li>
    </ul>
  </div>
  <div>
    <select id="category-filter">
      <option value="all">All Events</option>
      <option value="sports">Sports</option>
      <option value="concert">Concert</option>
      <option value="festival">Festival</option>
      <option value="theater">Theater</option>
    </select>
  </div>
</div>


   
    <Main />
   
  
    <Main />
   
    
    <Main />
 

 
   <div>
    <RatingSections />
   </div>
  
   <div>
    <NewsLetter />
   </div>
   <Footer />

    </>
   
  );
}

export default Home;
