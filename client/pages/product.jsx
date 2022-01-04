import React from 'react';

const Product = ({ name, description, price }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{description}</h3>
      <h2>{price}</h2>
    </div>

  );
};

export default Product;
