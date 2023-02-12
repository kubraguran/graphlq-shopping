import { Card } from 'antd';
import React from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

const { Meta } = Card;


function Cart({ cartItems, handleAddProducts, handleRemoveProducts, handleCartClear }) {
  console.log(cartItems.length)

  const totalPrice = ((cartItems.reduce((price, item) => price + item.quantity * item.prices.prices, 0))).toFixed(2);


  return (
    <div className='cart_products'>
      <div >
        {cartItems.length === 0 && <div className = 'empty'> Cart is Empty </div>}
      </div>
      <div className='cart-images'>
        <br/>
        <div >
          {cartItems.length >= 1 && (
            <Button variant="danger"  className='remove_all' onClick={() => handleCartClear()}>Clear All</Button>
          )}
        </div>
        <div className='total_price'>
          <span style={{ fontWeight: 'bold', fontFamily: 'monospace', fontSize: '1.5rem' }}>{totalPrice === 0 ? " " : `Total Price :$${totalPrice}`}</span>
        </div>
        {cartItems.map((item) => (
          <div key={item.id} className='cartShop'>
            <br />
            <span className='cartImg'>
              <Card style={{ width: 400, height: 250 }}cover={ <img alt="..." style={{ width: 400, height: 200 }}  src= {item.image}/>}>
              <span className='qnty'>{item.quantity}</span> X <span className='itemPrice'>{item.prices.prices} {item.prices.currency}</span>
              <div className='buttons'>
              <button className='btn' onClick={() => handleAddProducts(item)}><FaPlus /></button>
              <button className='btn' onClick={() => handleRemoveProducts(item)}><FaMinus /></button>
              <br/>
                <Meta title= {item.title}/>
              </div >
            
              </Card>

            </span>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Cart


