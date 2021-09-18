const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/musicstore", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connection is done!'))
    .catch(err => console.log('Error trying to connect BD ', err));