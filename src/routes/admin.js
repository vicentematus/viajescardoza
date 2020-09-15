const express = require('express');
const router = express.Router();

router.get('/login', (req, res) =>{
    res.render('admin/login');
});

router.post('/login', (req, res) =>{
    console.log(req.body);
    //AQUI VIENE LA MAGIA DEL LOGIN (Por ahora cualquier usuario y contraseña funcionan)
    res.redirect('/admin/home');
});

router.get('home', (req, res) =>{
    res.render('admin/home');
});

module.exports = router;