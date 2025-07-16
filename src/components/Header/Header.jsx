import React from 'react';
import './Header.css';
import headerImg from '../../assets/frontend_assets/header_img.png'; // use your path

function Header() {
  return (
    <div className="header" id='home'>
      <div className="header-content">
        <img src={headerImg} alt="Header" className="header-image" />
        <div className="text-overlay">
          <p>Order Your Favourite Food here</p>
          <h3>
            Choose from menu featuring a delectable array of dishes crafted with the
            finest ingredients and culinary expertise. Our mission is to satisfy your cravings
            and elevate your dining experience — one delicious meal at a time.
          </h3>
          <button>View More</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
