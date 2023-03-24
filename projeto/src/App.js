import styled, { createGlobalStyle } from "styled-components";
import './App.css';
import { Filters } from './Components/Filters/Filters';
import { Home } from './Components/ProductList/Home/Home';
import { Cart } from './Components/ShoppingCart/Cart/Cart';
import Header from "./Components/Header/Header";
import { productList } from "./Components/assets/productsList";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Filters />
      <Home />
      <Cart />
    </>
  );
}

export default App;
