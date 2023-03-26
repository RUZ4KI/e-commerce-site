import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { Router } from "./Router";
import './App.css'

function App() {
  return (
      <BrowserRouter>
        <CartContextProvider>
          <Router/>
        </CartContextProvider>
      </BrowserRouter>
  );
}

export default App;
