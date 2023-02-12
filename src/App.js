import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react"
import './App.css';
import SinglePage from './compenents/SinglePage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './compenents/Home';
import NavTab from './compenents/NavTab';
import MobileNav from './compenents/MobileNav';
import Cart from "./compenents/Cart";
import Products from './compenents/Products';




function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddProducts = (product) =>  {
    const ProductsExist = cartItems.find((item) => item.id === product.id);
    if(ProductsExist){
      setCartItems(cartItems.map((item) => item.id === product.id ?  {...ProductsExist, quantity:ProductsExist.quantity + 1} : item))
    }
    else { 
      setCartItems([...cartItems, {...product, quantity:1}])
    }
    }
    const handleRemoveProducts = (product) => {
      const ProductsExist = cartItems.find((item) => item.id === product.id);
      if(ProductsExist.quantity === 1) {
        setCartItems(cartItems.filter((item) => item.id !== product.id))
      } else  {
        setCartItems(
          cartItems.map((item) => item.id === product.id ? {...ProductsExist, quantity: ProductsExist.quantity - 1}: item)
        )
      }
    }
    const handleCartClear = () => {
      setCartItems([])
    }

  
  return (
    <div className="App">
      <BrowserRouter>
     <Container className = 'container'>
     <Row>
      <Col>
      <Routes>
      <Route path="/" element={<NavTab  cartItems = {cartItems}  />}>
          <Route path="products"  element={<Products  handleAddProducts = {handleAddProducts}  cartItems = {cartItems}/>} />
          <Route path="cart" element={<Cart  cartItems = {cartItems} handleAddProducts = {handleAddProducts} handleRemoveProducts = {handleRemoveProducts} handleCartClear = {handleCartClear}  />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
      </Col>
     </Row>
     </Container>
    </BrowserRouter>
    </div>
  );
}

export default App;
