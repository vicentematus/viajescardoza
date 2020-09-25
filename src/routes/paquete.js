const express = require('express');
const router = express.Router();

//Modelos
const Paquete = require('../models/Paquete');

router.get('/:idPaquete', (req, res) =>{
    Paquete.findById(req.params.idPaquete, (err, p) =>{
        if(err){
            res.send('Paquete no encontrado');
        }else{
            res.render('paquetes/info', {paquete:p});
        }
    });
});

module.exports = router;
