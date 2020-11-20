const express = require("express");
const router = express.Router();

const path = require("path");

//Models
const Paquete = require("../models/Paquete");
const { route } = require("./paquete");

router.get("/login", (req, res) => {
	res.render("admin/login");
});

router.post("/login", (req, res) => {
	//AQUI VIENE LA MAGIA DEL LOGIN (Por ahora cualquier usuario y contraseña funcionan)
	res.redirect("home");
});

router.get("/home", async (req, res) => {
	await Paquete.find(err => {
		if (err) {
			res.send(err);
		}
		
	}).then(paquetes => {
		res.render("admin/home", { paquetes: paquetes });
	});
});


router.get('/editar/paquete/:idPaquete', (req, res) =>{
	Paquete.findById(req.params.idPaquete, (err, paq) =>{
		if(err){
			res.send('Paquete no encontrado');
		} else {
			res.render('paquetes/editar', {paquete: paq});
		}
	});
});

module.exports = router;