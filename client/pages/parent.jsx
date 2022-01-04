import React from 'react';
import Product from './product';
const Parent = () => {

  return (
    <div>
      <h1>Hello, here are your orders</h1>
      <Product name='PS5' price = {499} description = 'Next generation of gaming, experience it in 4K 120HZ/FPS' />
      <Product name='Sony XJ90 TV, 48inches' price = {999} description = '4K UHD OLED TV made by Sony, perfect for next-gen gaming. Comes with Android TV' />
      <Product name='Keykron K6' price = {106} description = 'Mechanical Keyboard from Keykron with blue clicky switches. Hot Swappable and compatiable with both mac and windows' />
      <Product name='Logitech Mouse' price={99} description = 'Ergonomic mouse built with the health of your hand in mind. Allows use with up to 3 connected devices, fully wireless, USB included' />
    </div>
  );
};

export default Parent;
