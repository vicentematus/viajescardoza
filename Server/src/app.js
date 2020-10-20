const express   = require('express');
const path      = require('path');
const mongoose  = require('mongoose');
const bodyParser= require('body-parser');
const methodOverride = require('method-override');
const cors      = require('cors');

//Models
const Paquete = require('./models/Paquete');

//Router Files
const adminRoutes = require('./routes/admin');
const paqueteRoutes = require('./routes/paquete');

//App Config
const app = express();
const port = 80;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(cors());

app.use(express.static('./src/public'));


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
        res.json(paquetes);
      }
    });
});

app.listen(port, () =>{
    console.log('Bienvenido a Tursimo Cardoza!, la app esta corriendo en el puerto', port);
});
