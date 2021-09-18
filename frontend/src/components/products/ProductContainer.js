import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import ProductView from "./ProductView";

const ProductContainer = () => {
    const { path } = useRouteMatch();
    const [products, setProducts] = useState([]);

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path={path}>
                        <ProductView products={products} setProducts={setProducts}></ProductView>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default ProductContainer;

