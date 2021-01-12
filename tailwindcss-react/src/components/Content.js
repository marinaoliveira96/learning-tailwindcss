import React from 'react';
import Image1 from '../images/egg.jpg';
import Image2 from '../images/egg-2.jpg';

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={Image1} alt="" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Crispy, delicious, and nutritious</p>
          <span>R$16</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={Image2} alt="" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Salad</h2>
          <p className="mb-2">Crispy, delicious, and nutritious</p>
          <span>R$18</span>
        </div>
      </div>
    </>
  );
};

export default Content;
