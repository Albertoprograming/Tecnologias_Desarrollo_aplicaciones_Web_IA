const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql2');
const taskRoutes = require('./routes/tasks');

const app = express();
app.set('puerto', 3000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbOptions = {
    host: 'localhost',
    user: 'root',
    password: 'admin',
    port: 3306, 
    database: 'Profesores'
};

app.use(myconnection(mysql, dbOptions, 'single'));

app.use((req, res, next) => {
    req.getConnection((err, connection) => {
        if (err) {
            console.error('Error de conexión a la base de datos:', err);
            return next(err);
        }
        console.log('Conexión a la base de datos establecida');
        req.db = connection;
        next();
    });
});

app.engine('.hbs', engine({ extname: '.hbs', helpers: { eq: (v1, v2) => v1 === v2 }}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views')); // Asegúrate de que esta sea la ruta correcta al directorio de tus vistas .hbs

app.use(express.static(path.join(__dirname, 'Proyecto_web')));

app.use('/', taskRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/inicio', (req, res) => {
    res.sendFile(path.join(__dirname, 'Proyecto_web/Principal.html'));
});

app.get('/main', (req, res) => {
    res.render('main');
});

app.listen(app.get('puerto'), () => {
    console.log('El servidor está escuchando en el puerto', app.get('puerto'));
});

app.get('/comentarios', (req, res) => {
    // Simplemente renderiza la vista 'index' sin pasar datos adicionales
    res.render('index');
});
