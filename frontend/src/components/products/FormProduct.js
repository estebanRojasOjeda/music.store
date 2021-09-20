import { useState } from "react";


const FormProduct = (props) => {
    const {initialName, initialPrice, initialManufacturer, onSubmitProp} = props;
    const [name, setName] = useState(initialName);
    const [price, setPrice] = useState(initialPrice);
    const [manufacturer, setManufacturer] = useState(initialManufacturer);

    const productHandler = e => {
        e.preventDefault();
        onSubmitProp({ name, price, manufacturer });
    }

    return (
        <>
            <div>
                <form onSubmit={productHandler}>
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

export default FormProduct;