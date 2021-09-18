import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ProductContainer from './components/products/ProductContainer';
import ProductForm from './components/products/ProductFrom';

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
              <Link to="/products">Productos</Link>
            </li>
            <li>
              <Link to="/new">Ingresar nuevo producto</Link>
            </li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route path="/products">
              <ProductContainer></ProductContainer>
            </Route>
            <Route path="/new">
              <ProductForm></ProductForm>  
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
