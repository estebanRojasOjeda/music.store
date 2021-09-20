import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import FormProduct from "./FormProduct";
import DeleteButton from "./DeleteButton";

const UpdateProduct = () => {

    const { id } = useParams();
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data.product);
                setLoaded(true);
            })
            .catch(err => console.log('Error: ' + err))
    }, [])

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/product/update/' + id, product)
            .then(res => {
                console.log(res);
                Swal.fire('Producto Actualizado', 'Producto actualizado con exito!', 'success');
            })
            .catch(err => console.log('Error: ', err))

    }

    return (
        <>
            <div>
                <h1>Actualizar producto</h1>
                <br />
                {loaded && (
                    <>
                        <FormProduct
                            onSubmitProp={updateProduct}
                            initialName={product.name}
                            initialPrice={product.price}
                            initialManufacturer={product.manufacturer}
                        ></FormProduct>
                        <DeleteButton productId={product._id} successCallback={() => history.push("/products")} />
                    </>
                )}

            </div>
        </>
    )

}

export default UpdateProduct;