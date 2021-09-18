const express = require('express');
const MusicStoreRoutes = require('./routes/product.routes');
const MusicStoreDb = require('./configuration/db.config');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(express.json(), cors());
app.use(express.urlencoded({ extended: true }));

MusicStoreDb;
MusicStoreRoutes(app);

app.listen(port, () => {
    console.log("Listening at Port " + port)
});