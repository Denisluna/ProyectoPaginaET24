const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const server = http.createServer(app);

const PORT = 8080;

app.set('view engine', 'jade');

app.use('/public', express.static('public'));

app.get('/',(req, res) => {
  res.render('inicio');
});
app.get('/historia',(req, res) => {
  res.render('historia');
});
app.get('/institucional/especialidades',(req, res) => {
  res.render('institucional/especialidades');
});
app.get('/institucional/proyectos-escolares',(req, res) => {
  res.render('institucional/proy');
});
app.get('/institucional/vision',(req, res) => {
  res.render('institucional/vision');
});
app.get('/institucional/equipo-docente',(req, res) => {
  res.render('institucional/equipod');
});
app.get('/institucional/regimen-evaluacion',(req, res) => {
  res.render('institucional/reg');
});
app.get('/institucional/becas',(req, res) => {
  res.render('institucional/becas');
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

server.listen(PORT, () => {
  console.log("server escuchando en el puerto *", PORT);
});
