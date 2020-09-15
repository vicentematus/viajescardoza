const express   = require('express');
const path      = require('path');

const app = express();
const port = 8080

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Routes
const adminRoutes = require('./routes/admin');

app.use('/admin', adminRoutes);

app.get('/', (req,res) =>{
    res.send('Hello World!');
});

app.listen(port, () =>{
    console.log('Bienvenido a Tursimo Cardoza!');
});