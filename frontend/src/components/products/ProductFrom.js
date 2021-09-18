import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const initialState = {
    name: '',
    price: '',
    manufacturer: ''

}

const ProductForm = () => {
    const [newProduct, setNewProduct] = useState('');
    const [error, setError] = useState('');

    const updateForm = (e) => {
        const { name, value } = e.target;

        setNewProduct({
            ...newProduct,
            [name]: value
        });

        setError({
            ...error,
            name: ''
        });
    }

    const saveProduct = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/new', newProduct)
            .then(res => {
                setNewProduct(initialState);
                Swal.fire('Nuevo Producto', 'Producto guardado con exito!', 'success');
            })
            .catch(err => {
                for(let field in err.response.data.error) {
                    setError({
                        ...error,
                        [field]: err.response.data.error[field].message
                    });
                }
            })
    }

    return (
        <>
            <h1>Ingresar producto</h1>
            <br />
            <form onSubmit={saveProduct}>
                <label>Nombre</label>
                <input type="text" name="name" value={newProduct.name} onChange={updateForm} required></input>
                {error.name && <span style={{ color: 'red' }}>{error.name}</span>}
                <br/>
                <label>Precio</label>
                <input type="number" name="price" value={newProduct.price} onChange={updateForm} required></input>
                {error.price && <span style={{ color: 'red' }}>{error.price}</span>}
                <br/>
                <label>Fabricante</label>
                <input type="text" name="manufacturer" value={newProduct.manufacturer} onChange={updateForm} required></input>
                {error.manufacturer && <span style={{ color: 'red' }}>{error.manufacturer}</span>}
                <br/>
                <button type="submit">Guardar</button>
            </form>
        </>
    );
}

export default ProductForm;