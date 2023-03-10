import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Promocion from "./components/Promocion";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Thanks from "./components/Thanks";
import MainMenu from "./components/MainMenu";

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<MainMenu />} />
        <Route path={"/itemlistcontainer"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"/cart"} element={<Cart></Cart>}></Route>
        <Route path={"/checkout"} element={<Checkout></Checkout>}></Route>
        <Route path={"/thanks/:id"} element={<Thanks></Thanks>}></Route>
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Promocion />
      <Footer />
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
