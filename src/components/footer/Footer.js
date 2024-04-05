// components/Footer.js
import React from 'react';
import './Footer.css'
import image1 from '../../assets/image/master.png'
import image2 from '../../assets/image/visa.png'
import image3 from '../../assets/image/google.png'
import image4 from '../../assets/image/pay-apple.png'
import convert from '../../assets/image/converter.png'
import image6 from '../../assets/image/master.png'
import instagrams from '../../assets/image/instal.png'
import facebook from '../../assets/image/face.png'
import telegram from '../../assets/image/tele.png'
import twit from '../../assets/image/twitter.png'
import youtub from '../../assets/image/yout.png'
import review from '../../assets/image/fax-review.png'
import partner from '../../assets/image/imag-fx.png'
function Footer() {
  const cartSections = [
    {
      id: 1,
 
      image: image1
    },
    {
      id: 2,
    
      image: image2
    },
    {
      id: 3,
     
      image: image1
    },
    {
      id: 4,
 
      image: image2
    },
    {
      id: 5,
    
      image: image1
    },
    {
      id: 6,
     
      image: image6
    },
  ];
  return (
    <footer className="footer">
      <div className='container-sections-data'>
     
      <div>
          
        
        <div className='payment-section-footer'>
          <h3>Payment</h3>
         
        </div>
        <div className='payment-methid-sections'>
        {cartSections.map((section) => (
          <div key={section.id} >
            <img src={section.image} alt={section.title} />
           
          </div>
        ))}
        </div>
        <div className='payment-methid-sections-divider-sections'>
          <img src={convert} alt='' />
          <div style={{ display: 'inline-block', marginLeft:'10px' }}>
    <h3  className='our-warranty-item'>OUR WARRANTY</h3>
    <span style={{ fontSize: '16px', marginLeft:'3px' }}>
      IF YOU ARE NOT 100% SATISFIED WE<br />
      WILL<br />
      REFUND YOU 100% OF YOUR ORDER.
    </span>
   
  </div>
  
          
        </div>
       <div className='p-payment-idea-card-method'>
       <div className='p-payment-method'>
       <h4>Last Chance Ticket</h4>
      
       <li>Privacy Policies</li>
       <li>Terms of service</li>
       <li>Last Chance Ticket.COM</li>
        </div>
        <div className='p-payment-method' style={{marginTop:'14px',marginLeft:'-23px'}}>
      
       <li>Copyright 2007-2024</li>
       <li style={{marginLeft:'15px'}}>Return policies</li>
       <li style={{marginLeft:'20px'}}>F.A.Q 1/2   F.A.Q 2/2</li>
        </div>
       </div>
      </div>
      <div className='social-data-payment'>
       <div className='social-media-footer'>
        <h4>SOCIAL MEDIA</h4>
       </div>
       <div>
      <img src={instagrams} alt='' style={{marginRight:'12px'}}/>
      <img src={facebook} alt=''style={{marginRight:'12px'}}/>
      <img src={telegram} alt=''style={{marginRight:'12px'}}/>
      <img src={youtub} alt=''style={{marginRight:'12px'}}/>
      <img src={twit} alt=''/>
       </div>
       <div className='social-media-footer'>
        <h4>PARTNERS</h4>
       </div>
      
       <div style={{marginBottom:'12px'}}>
       <img src={partner} alt=''style={{marginRight:'12px'}}/>
       </div>
       <div>
       <img src={review} alt=''style={{marginRight:'12px'}}/>
       </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
