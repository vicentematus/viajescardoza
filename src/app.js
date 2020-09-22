const express   = require('express');
const path      = require('path');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');

//Router Files
const adminRoutes = require('./routes/admin');

//App Config
const app = express();
const port = 8080

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Base de Datos
mongoose.connect('mongodb://localhost/ViajesCardoza', {useNewUrlParser: true, useUnifiedTopology: true});

//Routes
app.use('/admin', adminRoutes);

app.get('/', (req,res) =>{
    res.send('Viajes Cardoza');
});

app.listen(port, () =>{
    console.log('Bienvenido a Tursimo Cardoza!');
});