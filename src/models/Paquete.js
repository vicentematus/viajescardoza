const mongoose = require('mongoose');
const {Schema} = mongoose;

const paqueteSchema = new Schema({
    nombre: String,
    desc: String,
    precio: Number,
    categoria: String,
    subcat: String,
    fecha: Date,
    fotos: [],
    linkPago: String
});

module.exports = mongoose.model('paquete', paqueteSchema);
