import './App.css';
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import ProductContainer from './components/products/ProductContainer';
import NewProduct from './components/products/NewProduct';
import DetailProduct from './components/products/DetailProduct';
import UpdateProduct from './components/products/UpdateProduct';

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
              <NewProduct></NewProduct>  
            </Route>
            <Route path="/detail/:id">
              <DetailProduct></DetailProduct>  
            </Route>
            <Route path="/update/:id">
              <UpdateProduct></UpdateProduct>  
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
