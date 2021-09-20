import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = (props) => {

    const { id } = useParams();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [manufacturer, setManufacturer] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setName(res.data.product.name);
                setPrice(res.data.product.price);
                setManufacturer(res.data.product.manufacturer);
            })
            .catch(err => console.log('Error: ' + err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/update/' + id, {
            name,
            price,
            manufacturer
        })
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
                <form onSubmit={updateProduct}>
                    <label>Nombre</label>
                    <input type="text" name="name" value={name || ''} onChange={(e) => { setName(e.target.value) }} ></input>

                    <br />
                    <label>Precio</label>
                    <input type="number" name="price" value={price || ''} onChange={(e) => { setPrice(e.target.value) }} ></input>

                    <br />
                    <label>Fabricante</label>
                    <input type="text" name="manufacturer" value={manufacturer || ''} onChange={(e) => { setManufacturer(e.target.value) }} ></input>

                    <br />
                    <button type="submit">Guardar</button>

                </form>
            </div>
        </>
    )

}

export default UpdateProduct;