import React from 'react'
import './NewsLetter.css'
import image from '../../../assets/image/Vector.png'
const NewsLetter = () => {
  return (
    <div className='new-letter-sections'>
     <div className='container-sections'>
    <div className='main-section-news-letter'>
    <div>
<h4>Join The Newsletter To Learn About <br />
Future Events</h4>

<div className='section-join-news-letter'>
<span>Join the newsletter to and get 10% discount on your first <br></br> 
ticket purchase</span>
</div>
<div className='news-letter-search'>
  <input type='text' placeholder='Enter Email Address' />

</div>
<div className='news-letter-search'>
<button className='subscribe-button'>Subscribe</button>
</div>
</div>

<div className='data-image-section-grid'>
<img src={image} alt='text' />
</div>
    </div>
     </div>
    </div>
  )
}

export default NewsLetter
