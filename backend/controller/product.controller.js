const Product = require('../model/product.model');

module.exports.index = (req, res) => {
    res.json({ message: "Conexión establecida!" });
}

module.exports.createProduct = (req, res) => {
    console.log(req.body)
    Product.create(req.body)
        .then(newProduct => res.json({ newProduct: newProduct }))
        .catch(err => res.json({ message: "Error al crear", error: err }))
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(el => res.json({ products: el }))
        .catch(err => res.json({ message: "Error al buscar productos", error: err }));
}

module.exports.findById = (req, res) => {
    Product.findById({ _id: req.params.id })
        .then(el => res.json({ product: el }))
        .catch(err => res.json({ message: "Error al tratar de buscar por Id", error: err }));
}

module.exports.updateProduct = (req, res) => {
    Product.updateOne({ _id: req.params.id }, req.body, { new: true })
        .then(el => res.json({ updateProduct: el }))
        .catch(err => res.json({ message: "Error al tratar de actualizar", error: err }))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Error al tratar de eliminar", error: err }))
}