const express = require('express');
const router = express.Router();

const multer = require("multer");

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './src/public/uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + "-" + Date.now().toString().replace(/:/g, '-'));
	},
});
var upload = multer({ storage: storage });

//Modelos
const Paquete = require('../models/Paquete');
const { route } = require('./admin');

router.get("/new", (req, res) => {
	res.render("paquetes/new");
});

//create
router.post("/", upload.single("img"), (req, res) => {
	const newPaquete = new Paquete({
		nombre: req.body.nombre,
		desc: req.body.desc,
        precio: req.body.precio,
        img: req.file.path,
		categoria: req.body.categoria,
		subcat: req.body.subCategoria,
		fecha: req.body.fecha,
		linkPago: req.body.linkPago,
	});

	newPaquete.save();

	res.redirect("/admin/home");
});

//Read
router.get('/:idPaquete', (req, res) =>{
    Paquete.findById(req.params.idPaquete, (err, p) =>{
        if(err){
            res.send('Paquete no encontrado');
        }else{
            res.json(p);
        }
    });
});


//Update

router.put('/:idPaquete', (req, res) =>{
    console.log('Hello Cabrones')
    const newInfo = {
        nombre: req.body.nombre,
		desc: req.body.desc,
        precio: req.body.precio,
		categoria: req.body.categoria,
		subcat: req.body.subCategoria,
        fecha: req.body.fecha,
        
        //Agregar Multer para imagenes multiples y guardar las rutas
        fotos:[],

        linkPago: req.body.linkPago,
        
        destacado: req.body.destacado,
        oferta: req.body.oferta,
    }

    Paquete.findOneAndUpdate(req.params.idPaquete, newInfo)
    .then(infoActualizada =>{
        console.log(infoActualizada);
        res.redirect('/admin/home');
    });
});

//Destroy

router.delete('/:idPaquete', (req, res) =>{
    Paquete.findOneAndDelete(req.params.idPaquete)
    .then(err =>{
        console.log(err);
        res.redirect('/admin/home');
    })

});


//Ofertas y Destacados
// Aqui va toda la logica que tiene que ver con destacar o poner en oferta algun producto
module.exports = router;
