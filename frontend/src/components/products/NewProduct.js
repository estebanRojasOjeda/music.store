import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import FormProduct from "./FormProduct";


const NewProduct = () => {
    const [newProduct, setNewProduct] = useState([]);

    const saveProduct = product => {
        axios.post('http://localhost:8000/api/product/new', product)
            .then(res => {
                setNewProduct([...newProduct, res.data]);
                Swal.fire('Nuevo Producto', 'Producto guardado con exito!', 'success');
            })
            .catch(err => console.log('Error: ' + err))
    }

    return (
        <>
            <h1>Ingresar producto</h1>
            <br />
            <FormProduct onSubmitProp={saveProduct} initialName="" initialPrice="" initialManufacturer=""></FormProduct>
        </>
    );
}

export default NewProduct;