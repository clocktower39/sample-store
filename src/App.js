import React, { useState } from "react";
import { Drawer } from "@material-ui/core";
import Merchandise from './Components/Merchandise';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout/Checkout';
import "./App.css";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="App">
      <Merchandise toggleDrawer={()=>{toggleDrawer()}} />
      <Drawer anchor="bottom" variant="temporary" open={isDrawerOpen}>
        <Cart toggleDrawer={()=>{toggleDrawer()}}/>
        <Checkout />
      </Drawer>
    </div>
  );
}

export default App;