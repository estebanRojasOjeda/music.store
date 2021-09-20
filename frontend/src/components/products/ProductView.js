import { useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const ProductView = (props) => {

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/all-products')
            .then(res => {
                props.setProducts(res.data.products)
            })
            .catch(err => Swal.fire('Error getting products', 'Error getting the products view: ' + err, 'error'));
    }, []);

    const history = useHistory();

    const detailProduct = (e) => {
        history.push('/detail/' + e.target.value);
    }

    const updateProduct = (e) => {
        history.push('/update/' + e.target.value);
    }

    const removeFromDom = id => {
        props.setProducts(props.products.filter(prd => prd._id != id));
    }

    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Manufacturer</th>
                            <th>Detalle</th>
                            <th>Actualizar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.products.length > 0 && props.products.map((item, i) => {
                            return (<tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.manufacturer}</td>
                                <td><button onClick={detailProduct} value={item._id}>GO</button></td>
                                <td><button onClick={updateProduct} value={item._id}>UP</button></td>
                                <td>
                                    <DeleteButton productId={item._id} successCallback={() => removeFromDom(item._id)}></DeleteButton>

                                </td>
                            </tr>)
                        })

                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductView;