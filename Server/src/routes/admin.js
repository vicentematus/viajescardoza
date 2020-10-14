const express = require("express");
const router = express.Router();

const path = require("path");
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

//Models
const Paquete = require("../models/Paquete");

router.get("/login", (req, res) => {
	res.render("admin/login");
});

router.post("/login", (req, res) => {
	console.log(req.body);
	//AQUI VIENE LA MAGIA DEL LOGIN (Por ahora cualquier usuario y contraseña funcionan)
	res.redirect("home");
});

router.get("/home", async (req, res) => {
	const paqs = await Paquete.find((err) => {
		if (err) {
			res.send(err);
		}
	});

	res.render("admin/home", { paquetes: paqs });
});

router.get("/new/paquete", (req, res) => {
	res.render("paquetes/new");
});

router.post("/new/paquete", upload.single("img"), (req, res) => {
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

module.exports = router;
