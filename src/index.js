//archivo de node.js que nos permite iniciar y arrancar el sevidor

const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database')


//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());


//Routes
app.use('/api/tasks' ,require('./routes/task.routes'));

//Statics files
app.use(express.static(path.join(__dirname, 'public')));
/*console.log(path.join(__dirname, 'public'));*/



//Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
} );