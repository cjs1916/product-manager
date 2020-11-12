const ProductController = require('../controllers/products.controller')

module.exports = (app) => {
    //index route to get all things
    app.get('/api/products', ProductController.index);

    app.post('/api/products/create', ProductController.create);

    app.get('/api/products/:id', ProductController.show);
    app.put('/api/products/update/:id', ProductController.update);

    app.delete('/api/products/destroy/:id', ProductController.destroy);
}