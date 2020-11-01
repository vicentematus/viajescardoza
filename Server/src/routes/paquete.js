const express = require('express');
const router = express.Router();
const path  = require('path');
const multer = require("multer");

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './src/public/uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, Date.now().toString().replace(/:/g, '-') + path.extname(file.originalname));
	},
});
var upload = multer({ storage: storage });

//Modelos
const Paquete = require('../models/Paquete');
const { route } = require('./admin');

router.get("/new", (req, res) => {
	res.render("paquetes/new");
});

const paqueteUploads = upload.fields([{name: 'img', maxCount: 1}, {name: 'imgBanner', maxCount: 1}]) 

//create
router.post("/", paqueteUploads, (req, res) => {
	const newPaquete = new Paquete({
		nombre: req.body.nombre,
		desc: req.body.desc,
        precio: req.body.precio,
		categoria: req.body.categoria,
		subcat: req.body.subcat,
        fechaSalida: req.body.fechaSalida,
        fechaLlegada: req.body.fechaLlegada,
        linkPago: req.body.linkPago,
        
        oferta: false,
        favorito: false,

        img: req.files.img[0].path,
        imgBanner: req.files.imgBanner[0].path,
	});

	newPaquete.save().then(val =>{
       console.log(val); 
       res.redirect("/admin/home");
    });
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
    const newInfo = {

        nombre: req.body.nombre,
		desc: req.body.desc,
        precio: req.body.precio,
		categoria: req.body.categoria,
		subcat: req.body.subcat,
        fechaSalida: req.body.fechaSalida,
        fechaLlegada: req.body.fechaLlegada,
        linkPago: req.body.linkPago,
        
        oferta: false,
        favorito: false,

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


//Ofertas y favorito
router.put('/:idPaquete/oferta', (req, res) =>{
    Paquete.findById(req.params.idPaquete, (err, paqueteInfo) =>{

        const changeOfertaState = {
            oferta: !paqueteInfo.oferta,
        }
    
        Paquete.findOneAndUpdate(req.params.idPaquete, changeOfertaState)
        .then(infoActualizada =>{
            console.log(infoActualizada);
            res.redirect('/admin/home');
        });
    });
});

router.put('/:idPaquete/favorito', (req, res) =>{
    Paquete.findById(req.params.idPaquete, (err, paqueteInfo) =>{

        const changeFavoritoState = {
            oferta: !paqueteInfo.favorito,
        }
    
        Paquete.findOneAndUpdate(req.params.idPaquete, changeFavoritoState)
        .then(infoActualizada =>{
            console.log(infoActualizada);
            res.redirect('/admin/home');
        });
    });
});


//update Images
router.put('/:idPaquete/newThumbnail', upload.single('img'), (req, res) =>{
    const newImgs = {
        img: req.file.path,
      }  
    Paquete.findByIdAndUpdate(req.params.idPaquete, newImgs).then(newInfo =>{
        console.log(newInfo);
        res.redirect(`/admin/editar/paquete/${req.params.idPaquete}`)
    });
});

router.put('/:idPaquete/newBanner', upload.single('imgBanner'), (req, res) =>{
    const newImgs = {
        imgBanner: req.file.path,
      }  
    Paquete.findByIdAndUpdate(req.params.idPaquete, newImgs).then(newInfo =>{
        console.log(newInfo);
        res.redirect(`/admin/editar/paquete/${req.params.idPaquete}`)
    });
});
module.exports = router;
