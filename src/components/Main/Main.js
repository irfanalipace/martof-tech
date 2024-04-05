import React from 'react';
import './Main.css';
import image1 from '../../assets/image/img4.png'
import image2 from '../../assets/image/img5.png'
import image3 from '../../assets/image/img6.png'

const Main = () => {
  // Sample data for the cart sections
  const cartSections = [
    {
      id: 1,
      title: 'Billy Joel & Stevie Nicks' ,
      content: 'New York, United States',
      price:'from $80',
      image: image1
    },
    {
      id: 2,
      title: 'Billy Joel & Stevie Nicks' ,
      content: 'New York, United States',
      price:'from $80',
      image: image2
    },
    {
      id: 3,
      title: 'Billy Joel & Stevie Nicks' ,
      content: 'New York, United States',
      price:'from $80',
      image: image3
    },
  ];

  return (
    <div className="cart-sections-data-layer">
      {cartSections.map((section) => (
        <div key={section.id} className="cart-section-image-sections">
          <img src={section.image} alt={section.title} />
          <h3>{section.title}</h3>
          <p>{section.content}</p>
          <span>{section.price}</span>
        </div>
      ))}
    </div>
  );
};

export default Main;
