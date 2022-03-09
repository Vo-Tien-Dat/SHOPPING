import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import './App.css';
import Products from './Pages/Products/Products';
import InformationProduct from './Pages/InformationProduct/InformationProduct';
import Contact from './Pages/Contact/Contact';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path = "/product/:id" exact = {true} element = {<InformationProduct/>}/>
          <Route path = "/home" exact = {true} element = {<Home/>}/>
          <Route path = "/product" exact = {true} element = {<Products/>}/>
          <Route path = "/contact" exact = {true} element = {<Contact/>}/>
          <Route path = "/shopping-cart" exact = {true} element = {<ShoppingCart/>}/>
          <Route path = "/" exact = {true} element = {<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
