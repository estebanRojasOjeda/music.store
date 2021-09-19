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

    const detail = (e) => {
        history.push('/detail/' + e.target.value);
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
                        </tr>
                    </thead>
                    <tbody>
                        {props.products.length > 0 && props.products.map((item, i) => {
                            return (<tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.manufacturer}</td>
                                <td><button onClick={detail} value={item._id}>GO</button></td>
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