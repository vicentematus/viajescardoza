const express   = require('express');
const path      = require('path');
const mongoose  = require('mongoose');
const bodyParser= require('body-parser');
const helmet    = require('helmet');

//Models
const Paquete = require('./models/Paquete');

//Router Files
const adminRoutes = require('./routes/admin');
const paqueteRoutes = require('./routes/paquete');

//App Config
const app = express();
const port = 80;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('src/public'));
app.use(helmet());

//Base de Datos
mongoose.connect('mongodb://localhost/ViajesCardoza', {useNewUrlParser: true, useUnifiedTopology: true});

//Routes
app.use('/admin', adminRoutes);
app.use('/paquete', paqueteRoutes);

app.get('/', (req,res) =>{
    Paquete.find((err, paquetes)=>{
      if(err){
        console.log(err);
        res.send(err);
      } else {
        res.render('./homepage', {paquetes:paquetes});
      }
    });
});

app.listen(port, () =>{
    console.log('Bienvenido a Tursimo Cardoza!');
});