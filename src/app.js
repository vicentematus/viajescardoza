const express   = require('express');
const path      = require('path');
const mongoose  = require('mongoose');
const bodyParser= require('body-parser');
const helmet    = require('helmet');
const engine       = require('ejs-mate');

//Models
const Paquete = require('./models/Paquete');

//Router Files
const adminRoutes = require('./routes/admin');
const paqueteRoutes = require('./routes/paquete');

//App Config
const app = express();
const port = 80;

app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(helmet());
app.use(express.static(__dirname + '/public'));

//Base de Datos
mongoose.connect('mongodb://localhost:27017/ViajesCardoza', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(db => console.log('DB is connected'))
        .catch(err => console.log(err))

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
    console.log('Bienvenido a Tursimo Cardoza!, la app esta corriendo en el puerto', port);
});
