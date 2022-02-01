//const session = require('express-session');
const express = require('express');
const path = require('path');
const App = express();

// Config
const PORT = process.env.port || 3000;
App.set('view engine', 'ejs');
App.use(express.urlencoded({extended:false}));
App.use(express.static(path.join(__dirname, 'public')));

// Rutas
App.use(require('./router/main'))

App.listen(PORT, ()=>{
    console.log(`Servidor Activo: http://localhost:${PORT}/`)
});
