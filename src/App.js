
//Components
import Information from "./components/Information";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Cart from "./components/Cart";

//Style
import './styles/App.css'
import ZoomProducts from "./components/ZoomProducts";

function App() {
  
  return (
    <div style={{position:"relative"}}>
      <ZoomProducts/>
      <div className="container">
        <Nav />
        <Cart />
        <main style={{display:"flex"}}>
          <Products />
          <Information />
        </main>
      </div>
    </div>
  );
}

export default App;
