const router = require('express').Router();

router.get('/especialidades/computacion',(req, res) => {
  res.render('institucional/especialidades/computacion');
});
router.get('/especialidades/ade',(req, res) => {
  res.render('institucional/especialidades/ADE');
});
router.get('/proyectos-escolares',(req, res) => {
  res.render('institucional/proy');
});
router.get('/vision',(req, res) => {
  res.render('institucional/vision');
});
router.get('/equipo-docente',(req, res) => {
  res.render('institucional/equipod');
});
router.get('/regimen-evaluacion',(req, res) => {
  res.render('institucional/reg');
});
router.get('/becas',(req, res) => {
  res.render('institucional/becas');
});

module.exports = router;
