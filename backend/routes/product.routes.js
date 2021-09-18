const ProductController = require('../controller/product.controller');

module.exports = app => {
    app.get("/api", ProductController.index);
    app.post("/api/product/new", ProductController.createProduct);
    app.get("/api/product/all-products", ProductController.findAllProducts);
    app.get("/api/product/:id", ProductController.findById);
    app.put("/api/product/update/:id", ProductController.updateProduct);
    app.delete("/api/product/delete/:id", ProductController.deleteProduct);
}