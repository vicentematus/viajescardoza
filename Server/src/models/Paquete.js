const mongoose = require('mongoose');
const {Schema} = mongoose;

const paqueteSchema = new Schema({
    nombre: String,
    desc: String,
    img: String,
    precio: Number,
    duracion: Number,
    categoria: String,
    subcat: String,
    fecha: Date,
    fotos: [],
    linkPago: String,

    destacado: Boolean,
    megaDestacado: Boolean
});

module.exports = mongoose.model('paquete', paqueteSchema);
