const http = require('http');
const express = require('express');
const bcrypt = require('bcrypt');
const instRouter = require('./institucionalRouter');
const app = express();
const server = http.createServer(app);

const PORT = 8080;

app.set('view engine', 'jade');

app.use(express.urlencoded({extended: false}));
app.use('/public', express.static('public'));
app.use('/institucional', instRouter);

app.get('/',(req, res) => {
  res.render('inicio');
});
app.get('/historia',(req, res) => {
  res.render('historia');
});
app.get('/talleres/aleman',(req, res) => {
  res.render('talleres/aleman');
});
app.get('/talleres/club-exploradores',(req, res) => {
  res.render('talleres/clube');
});
app.get('/bi',(req, res) => {
  res.render('bi');
});
app.get('/login', (req, res) => {
  res.render('login');
});
app.get('/register', (req, res) => {
  res.render('register');
})

server.listen(PORT, () => {
  console.log("server escuchando en el puerto *", PORT);
});
