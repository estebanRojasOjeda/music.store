import React from "react";
import axios from "axios";
import Swal from 'sweetalert2';

const DeleteButton = (props) => {
    const { productId, successCallback } = props;

    const deleteProduct = () => {

        Swal.fire({
            title: 'Estas segur@?',
            text: "vas a elminar el registro: "+ productId,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('http://localhost:8000/api/product/delete/' + productId)
                .then(res => {
                    successCallback();
                    
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
        <button onClick={deleteProduct}>DEL</button>
    )
}

export default DeleteButton;