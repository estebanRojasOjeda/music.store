import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const DetailProduct = () => {
    const [product, setProduct] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct({
                    ...res.data.product

                });
            })
            .catch(err => console.log('error: ' + err))
    }, []);

    return (
        <>
            <h1>Detalle de producto</h1>
            <div>
                <p>Id: {product._id}</p>
                <p>Nombre: {product.name}</p>
                <p>Precio: {product.price}</p>
                <p>Fabricante: {product.manufacturer}</p>
            </div>
        </>
    )
}

export default DetailProduct;