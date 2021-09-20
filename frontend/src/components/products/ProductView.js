import { useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";


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

    const deleteProduct = (e) => {

        Swal.fire({
            title: 'Estas segur@?',
            text: "vas a elminar el registro: "+ e.target.value,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('http://localhost:8000/api/product/delete/' + e.target.value)
                .then(res => {
                    removeFromDom(e.target.value);
                    console.log(res);
                    Swal.fire(
                        'Registro emilinado!',
                        'no hay vuelta atrás!',
                        'success'
                      )
                })
            }
          })
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
                                <td><button onClick={deleteProduct} value={item._id}>DEL</button></td>
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