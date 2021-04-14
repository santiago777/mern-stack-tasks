// se utilizara par la coneccion a la bdd y la definir las vistas de los datos

const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mern-tasks';

mongoose.connect(URI, { useNewUrlParser: true , useUnifiedTopology: true})
    .then(db => console.log('DB conectada'))
    .catch(err => console.err(err));


module.exports = mongoose;