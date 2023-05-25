import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Product from './Components/Product';
import {Routes,Route,Navigate,BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from './Components/buttons/ProductDetail';
import Cart from './Components/Cart';
import Checkoutsample from './Components/Checkoutsample';
import Register from './Components/buttons/Register';
import Loginnew from './Components/buttons/Loginnew';


function App() {
  return (
    <>
    
    <Router>
      <Header />
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/product" element={<Product/>} />
    <Route path="/product/:id"element={<ProductDetail />}/>
    <Route path="/cart"element={<Cart />}/>
    <Route path="/checkoutsample"element={<Checkoutsample />}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/register"element={<Register />}/>
    <Route path="/login"element={<Loginnew />}/>
    
    </Routes>
    <Footer />
    </Router>
    </> 
  );
}


export default App;
