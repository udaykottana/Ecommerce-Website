import Button from './components/Button'
import './App.css';
import styled,{ThemeProvider} from 'styled-components';
import {lightTheme} from "./utils/Themes";
import React, { useState } from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Authentication from './pages/Authentication';
import ShopListing from './pages/ShopListing';
import Favourite from './pages/Favourite'
import Cart from './pages/Cart'
import ProductDetials from './pages/ProductDetials';
import { useSelector } from 'react-redux';
import ToastMessage from './components/ToastMessage';
const Container=styled.div`
  width:100%;
  height:100vh;
  display:flex;
  flex-direction:column;
  background:${({theme})=>theme.bg};
  color:${({theme})=>theme.text_primary};
  overflow-x:hidden;
  overflow-y:hidden;
  transition:all 0.2s ease;
`
function App() {
  const {currentUser}=useSelector((state)=>state.user);
  const { open, message, severity } = useSelector((state) => state.user);
  const [openAuth, setOpenAuth] = useState(false);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
      <Container>
        
        <NavBar setOpenAuth={setOpenAuth} currentUser={currentUser}/>
        
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/Shop' exact element={<ShopListing/>}/>
          <Route path='/favourite' exact element={<Favourite/>}/>
          <Route path='/cart' exact element={<Cart/>}/>
          <Route path='/shop/:id' exact element={<ProductDetials/>}/>
        </Routes>
        {openAuth && <Authentication openAuth={openAuth} setOpenAuth={setOpenAuth}/>}
        {open && (
            <ToastMessage open={open} message={message} severity={severity} />
          )}
      </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
