const express = require('express');
const app = express();
const hbs = require('hbs');
///helpers
require('./hbs/helpers');


const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));


/////Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'ladY maRia',
        anio: new Date().getFullYear()
    });

});


app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'Adrian',
        anio: new Date().getFullYear()
    });

});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto: ${port}`);
});


// app.get('/', (req, res) => {
//     // res.send('Hola Creador');
//     let salida = {
//         nombre: 'Adrian',
//         edad: 19,
//         url: req.url
//     };

//     res.send(salida);
// });
// app.get('/data', (req, res) => {
//     res.send(`Hola ${req.url}`);
// });3