const express = require('express');
const router = express.Router();

//Models
const Paquete = require('../models/Paquete');

router.get('/login', (req, res) =>{
    res.render('admin/login');
});

router.post('/login', (req, res) =>{
    console.log(req.body);
    //AQUI VIENE LA MAGIA DEL LOGIN (Por ahora cualquier usuario y contraseña funcionan)
    res.redirect('home');
});

router.get('/home', (req, res) =>{
    res.render('admin/home');
});

router.get('/new/paquete', (req, res) =>{
    res.render('admin/newPaquete');
});

router.post('/new/paquete', (req, res) =>{
    const newPaquete = new Paquete ({
        nombre: req.body.nombre,
        desc: req.body.desc,
        precio: req.body.precio,
        categoria: req.body.categoria,
        subcat: req.body.subCategoria,
        fecha: req.body.fecha,
        linkPago: req.body.linkPago
    });

    newPaquete.save();

    res.redirect('/admin/home');
    
});

module.exports = router;