import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ProductContainer from './components/products/ProductContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route path="/products">
              <ProductContainer></ProductContainer>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
