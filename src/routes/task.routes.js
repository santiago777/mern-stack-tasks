//tiene la tarea de definir las operaciones  a traves de lñas urls que le vamos adar al servidor CRUD

const express = require('express');
const router = express.Router();

//modelo de la base de datos
const Task = require('../models/task');

//consulta las tareas en bbdd
router.get('/', async (req, res) =>{
   const tasks = await Task.find();
   //console.log(tasks);
   res.json(tasks);
});


//introduce tareas a bbdd
router.post('/', async(req, res) => {
    const {title, description} = req.body;
    const task = new Task({
        title,
        description
    });
    await task.save();
    //console.log(task);
    res.json({status: 'tarea guardada'});
});

//actualiza tareas en bbdd
router.put('/:id', async (req, res) => {
    const {title, description} = req.body;
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    //console.log(req.params.id);
    res.json({status: 'tarea actualizada'});
});

//borra en bbdd
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    //console.log(req.params.id);
    res.json({status: 'tarea eliminada'});
});


//select de bbdd por PK
router.get('/:id', async (req, res) =>{
    const task = await Task.findById(req.params.id);
    //console.log(task);
    res.json(task);
 });


module.exports = router;