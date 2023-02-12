import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Badge from '@mui/material/Badge';



function MobileNav({cartItems}) {
  return (
    <div className = 'mobileNav'>
    <ul className='mobileUl'>
      <li>
      <Button variant="outline-secondary"><Link to="/">Home</Link></Button>
      </li>
      <li>
      <Button variant="outline-secondary"><Link to="/cart"><Badge badgeContent={cartItems.length === 0 ? '0' : cartItems.length} color="secondary"><CardGiftcardIcon/></Badge></Link></Button>
      </li>
      <li>
      <Button variant="outline-secondary"> <Link to="/products">Product</Link></Button>
      </li>
    </ul>

    </div>
  )
}

export default MobileNav