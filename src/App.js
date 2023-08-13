import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Title from "./components/title";
import ItemListContainer from './components/ItemListContainer';
import ItemCategoryContainer from './components/ItemCategoryContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';


function App() {

  return (
    // <Container />
    
    <CartProvider>
    <Router>
      <NavBar />
      < Title />

        <Routes>

          <Route exact path='/' element={ < ItemListContainer />} /> 
          <Route exact path='/category/:family' element={<ItemCategoryContainer />} /> 
          <Route exact path='/category/:family/item/:id'  element={<ItemDetailContainer />} /> 
          <Route exact path='/item/:id' element={<ItemDetailContainer />} /> 

        </Routes>

      </Router>
    </CartProvider>
    
    
  );
}

export default App;
