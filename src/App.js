
import React from "react";
import CartItem from "./CartItem";
 function App() {
//   function showAlert(){
//     alert('welcome cart');
//   }
   return (
    <div className="App">
      <h1>Cart</h1>
      {/* <button onClick={showAlert}>show Alert</button> */}
      <CartItem/>
    </div>
  );
}

export default App;
