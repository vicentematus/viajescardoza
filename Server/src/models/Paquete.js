const mongoose = require('mongoose');
const {Schema} = mongoose;

const paqueteSchema = new Schema({
    nombre: String,
    desc: String,
    precio: Number,
    categoria: String,
    subcat: String,
    fechaSalida: Date,
    fechaLlegada: Date,
    linkPago: String,

    oferta: Boolean,
    favorito: Boolean,

    img: String,
    imgBanner: String
});

module.exports = mongoose.model('paquete', paqueteSchema);
