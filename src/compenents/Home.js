import React from 'react'
import image from './img/image.png'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function Home() {
  return (
  
  <div className='welcomeArticle'>
  <div >
   <img src =  {image}  className='shopImage'/>
   </div>
   <div className='footer'>
    <h1 className='footerP' style ={{color:"black"}}>
        SHOPPING TIME
    </h1>
    <h2 className='footerP' style ={{color:"black"}} >
      Let's Start to Discover!
    </h2>
    <Link to="/products">
    <Button variant="outline-danger" className = 'buttonDanger' size="m">Let's Start</Button>
    </Link>
   </div>
    </div>
  )
}

export default Home